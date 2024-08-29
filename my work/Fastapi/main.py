from fastapi import FastAPI, APIRouter, HTTPException
from config import collection
from database.schemas import all_data
from database.models import Todo


app = FastAPI()
router = APIRouter()

@router.get("/")
async def get_all_todos():
    data = collection.find()
    return all_data(data)

@router.post("/")
async def create_task(new_task: Todo):
    try:
        resp = collection.insert_one(dict(new_task))
        return {"status_code":200, "id":str(resp.inserted_id)}
    except Exception as e:
        return HTTPException(status_code=500, detail=f"some error occured {e}")
app.include_router(router)

