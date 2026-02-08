from fastapi import APIRouter, Body, HTTPException
from pymongo import MongoClient

router = APIRouter(prefix="/users", tags=["users"])

# DB Config
MONGO_URI = "mongodb+srv://zacdanny2007_db_user:uswF8H7rZFi0pbin@mcwics2026db.llmniuq.mongodb.net/?appName=mcwics2026db"
client = MongoClient(MONGO_URI)
db = client["IntroConnect"]
users_collection = db["users"]

@router.post("/signup")
async def signup(user_data: dict = Body(...)):
    try:
        if users_collection.find_one({"email": user_data["email"]}):
            raise HTTPException(status_code=400, detail="Email already registered")
        
        result = users_collection.insert_one(user_data)
        return {
            "status": "success", 
            "db_id": str(result.inserted_id)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))