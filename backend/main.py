from fastapi import FastAPI, Body, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from bson import ObjectId
import os

# 모든 라우터 임포트
from routes import matching, auth, users, chat

app = FastAPI(title="IntroConnect API")

# 1. CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. MONGODB 연결
MONGO_URI = "mongodb+srv://zacdanny2007_db_user:uswF8H7rZFi0pbin@mcwics2026db.llmniuq.mongodb.net/?appName=mcwics2026db"
client = MongoClient(MONGO_URI, tlsAllowInvalidCertificates=True)
db = client["IntroConnect"]
users_collection = db["users"]

# 3. 모든 모듈형 라우터 등록
app.include_router(matching.router)
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(chat.router)

# --- 공통 엔드포인트 ---

@app.get("/")
async def root():
    return {
        "message": "Welcome to IntroConnect API - Running on Gemini",
        "status": "Fully Modular and Active"
    }

# --- ADD FRIEND TO INNER CIRCLE ---

@app.post("/users/{user_id}/add-friend")
async def add_friend(user_id: str, payload: dict = Body(...)):
    friend_data = payload.get("friend") # The full friend object from frontend
    
    if not friend_data:
        raise HTTPException(status_code=400, detail="Friend data is required")

    try:
        # Convert string ID to MongoDB ObjectId
        obj_id = ObjectId(user_id)
        
        # Add the friend object to the user's 'inner_circle' array
        # $addToSet prevents duplicate entries
        result = users_collection.update_one(
            {"_id": obj_id},
            {"$addToSet": {"inner_circle": friend_data}}
        )

        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="User not found")

        return {"status": "success", "message": f"{friend_data['alias']} added to Inner Circle"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- LOGIN (Updated to include inner_circle) ---

@app.post("/login")
async def login(credentials: dict = Body(...)):
    email = credentials.get("email")
    password = credentials.get("password")

    user = users_collection.find_one({"email": email})

    if user and user.get("password") == password:
        return {
            "status": "success",
            "message": "Login successful",
            "user": {
                "id": str(user["_id"]),
                "email": user.get("email"),
                "firstName": user.get("firstName", "User"),
                "inner_circle": user.get("inner_circle", []) # Return existing friends
            }
        }
    
    raise HTTPException(status_code=401, detail="Invalid email or password")

@app.post("/signup")
async def signup(user_data: dict = Body(...)):
    try:
        if users_collection.find_one({"email": user_data["email"]}):
            raise HTTPException(status_code=400, detail="Email already registered")
        
        # Initialize an empty inner circle for new users
        user_data["inner_circle"] = []
        result = users_collection.insert_one(user_data)
        
        return {
            "status": "success", 
            "message": "User saved to Montreal Cloud",
            "db_id": str(result.inserted_id)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))