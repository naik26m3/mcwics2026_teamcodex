from fastapi import FastAPI, Body, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from routes import matching, auth
import os

app = FastAPI(title="IntroConnect API")

# 1. CORS Configuration


# Register Routers
app.include_router(matching.router)
app.include_router(auth.router)

# CORS configuration for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. MONGODB CONNECTION
# Added 'tlsAllowInvalidCertificates' to fix your SSL handshake error
MONGO_URI = "mongodb+srv://zacdanny2007_db_user:uswF8H7rZFi0pbin@mcwics2026db.llmniuq.mongodb.net/?appName=mcwics2026db"
client = MongoClient(MONGO_URI, tlsAllowInvalidCertificates=True)
db = client["IntroConnect"]
users_collection = db["users"]

@app.get("/")
async def root():
    return {"message": "Welcome to IntroConnect API"}

# --- NEW: THE LOGIN ROUTE ---
@app.post("/login")
async def login(credentials: dict = Body(...)):
    email = credentials.get("email")
    password = credentials.get("password")

    # 1. Find user in MongoDB
    user = users_collection.find_one({"email": email})

    # 2. Check if user exists and password matches
    if user and user.get("password") == password:
        return {
            "status": "success",
            "message": "Login successful",
            "user": {
                "email": user.get("email"),
                "firstName": user.get("firstName", "User"),
                "id": str(user["_id"])
            }
        }
    
    # 3. If no match, throw 401 error
    raise HTTPException(status_code=401, detail="Invalid email or password")

# 3. THE SIGNUP POST ROUTE
@app.post("/signup")
async def signup(user_data: dict = Body(...)):
    try:
        if users_collection.find_one({"email": user_data["email"]}):
            raise HTTPException(status_code=400, detail="Email already registered")
        
        result = users_collection.insert_one(user_data)
        
        return {
            "status": "success", 
            "message": "User saved to Montreal Cloud",
            "db_id": str(result.inserted_id)
        }
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))