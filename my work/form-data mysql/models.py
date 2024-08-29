from sqlalchemy import Boolean, Column, Integer, String  # Import necessary classes from SQLAlchemy
from database import Base  # Import the Base class from database.py, which is used to create models

# class User(Base):  # Define the User model, inheriting from Base
#     __tablename__ = 'users'  # Specify the table name in the database

#     id = Column(Integer, primary_key=True, index=True)
#     username = Column(String(50), unique=True)


class ContactForm(Base):  # Define the ContactForm model, inheriting from Base
    __tablename__ = 'contact_forms'  # Specify the table name in the database

    id = Column(Integer, primary_key=True, index=True)  # Define an integer column for the primary key with indexing
    fullname = Column(String(100))  # Define a string column for the full name in the contact form with a maximum length of 100 characters
    email = Column(String(100), unique=True)  # Define a string column for the email, ensuring it's unique in the database
    gender = Column(String(10))  # Define a string column for the gender with a maximum length of 10 characters
    newsletter = Column(Boolean)  # Define a boolean column indicating whether the user opted for the newsletter
    comment = Column(String(500))  # Define a string column for any comments with a maximum length of 255 characters



