from fastapi import FastAPI, HTTPException, Depends, status, Form, Request  # Import FastAPI and other necessary classes from FastAPI
from pydantic import BaseModel  # Import BaseModel from Pydantic to define request bodies
import models  # Import the models module containing User and ContactForm models
from database import engine, SessionLocal  # Import the database engine and session factory
from sqlalchemy.orm import Session  # Import the SQLAlchemy session class
from fastapi.responses import HTMLResponse  # Import HTMLResponse to render HTML responses
from fastapi.staticfiles import StaticFiles  # Import StaticFiles to serve static files
from fastapi.templating import Jinja2Templates  # Import Jinja2Templates to render templates

app = FastAPI()  # Create an instance of the FastAPI class to initialize the application
models.Base.metadata.create_all(bind=engine)  # Create all the tables in the database according to the models

# Serve static files (like your HTML form) and templates
app.mount("/static", StaticFiles(directory="HTML"), name="static")  # Mount the static files directory
templates = Jinja2Templates(directory="HTML")  # Set up the template directory

def get_db():  # Define a dependency to get the database session
    db = SessionLocal()  # Create a new session
    try:
        yield db  # Yield the session to be used in the request
    finally:
        db.close()  # Close the session after the request is done

@app.get("/", response_class=HTMLResponse)  # Define a route to render the contact form at the root URL
async def read_form(request: Request):  # Define the function to handle GET requests to the root URL
    print("Rendering contact form...")  # Print a message to the console
    return templates.TemplateResponse("contact-form.html", {"request": request})  # Render the contact form template

@app.post("/submit", status_code=status.HTTP_201_CREATED)  # Define a route to handle form submissions
async def submit_form(
    fullname: str = Form(...),  # Get the fullname from the form data
    email: str = Form(...),  # Get the email from the form data
    gender: str = Form(...),  # Get the gender from the form data
    newsletter: bool = Form(False),  # Get the newsletter subscription status from the form data, defaulting to False
    comment: str = Form(""),  # Get the comment from the form data, defaulting to an empty string
    db: Session = Depends(get_db)  # Get the database session using the dependency
):
    existing_user = db.query(models.ContactForm).filter(models.ContactForm.email == email).first()  # Check if the email already exists in the contact form table
    if existing_user:  # If the email is already registered
        raise HTTPException(status_code=400, detail="Email already registered")  # Raise a 400 error with a message

    try:
        db_form = models.ContactForm(  # Create a new ContactForm instance with the submitted data
            fullname=fullname,
            email=email,
            gender=gender,
            newsletter=newsletter,
            comment=comment
        )
        db.add(db_form)  # Add the new form to the session
        db.commit()  # Commit the session to save the form in the database
        return {"message": "Form submitted successfully!"}  # Return a success message
    except Exception as e:  # If an error occurs
        db.rollback()  # Roll back the session to undo any changes
        raise HTTPException(status_code=500, detail="An error occurred while submitting the form")  # Raise a 500 error with a message

@app.get("/posts/{post_id}", status_code=status.HTTP_200_OK)  # Define a route to read a post by its ID
async def read_post(post_id: int, db: Session = Depends(get_db)):  # Define the function to handle the request
    post = db.query(models.ContactForm).filter(models.ContactForm.id == post_id).first()  # Query the post by ID from the Post table
   
    if post is None:  # If the post is not found
        raise HTTPException(status_code=404, detail='Post was not found')  # Raise a 404 error with a message
    print(f"ID: {post.id}")
    print(f"Full Name: {post.fullname}")
    print(f"Email: {post.email}")
    print(f"Gender: {post.gender}")
    print(f"Newsletter: {post.newsletter}")
    print(f"Comment: {post.comment}")    
    return post  # Return the post data

import logging

@app.delete("/posts/{post_id}", status_code=status.HTTP_200_OK)
async def delete_post(post_id: int, db: Session = Depends(get_db)):
    try:
        db_post = db.query(models.ContactForm).filter(models.ContactForm.id == post_id).first()
        if db_post is None:
            raise HTTPException(status_code=404, detail='Post was not found')

        db.delete(db_post)
        db.commit()
        return {"message": "Post deleted successfully"}
    except Exception as e:
        logging.error(f"Error deleting post with id {post_id}: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while deleting the post")






# class UserBase(BaseModel):  # Define a Pydantic model for the user data
#     class UserBase(BaseModel):
#         username: str

# @app.post("/users/", status_code=status.HTTP_201_CREATED)
# async def create_user(user: UserBase, db: Session = Depends(get_db)):
#     db_user = models.User(**user.dict())
#     db.add(db_user)
#     db.commit()

# @app.get("/users/{user_id}", status_code=status.HTTP_200_OK)
# async def read_user(user_id: int, db: Session = Depends(get_db)):
#     user = db.query(models.User).filter(models.User.id == user_id).first()
#     if user is None:
#         raise HTTPException(status_code=404, detail="User not found")
#     return user
