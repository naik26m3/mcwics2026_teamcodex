from fastapi import APIRouter, Body, HTTPException
from pymongo import MongoClient

router = APIRouter(prefix="/chat", tags=["chat"])

MONGO_URI = "mongodb+srv://zacdanny2007_db_user:uswF8H7rZFi0pbin@mcwics2026db.llmniuq.mongodb.net/?appName=mcwics2026db"
client = MongoClient(MONGO_URI)
db = client["IntroConnect"]
conversations_collection = db["conversations"]

@router.patch("/save/{db_id}")
async def save_chat(db_id: str, message: dict = Body(...)):
    try:
        result = conversations_collection.update_one(
            {"user_id": db_id},
            {"$push": {"history": message}},
            upsert=True
        )
        return {"status": "success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))