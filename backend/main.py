from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# Import your organized routes
from routes import users, chat 


app = FastAPI(title="IntroConnect API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- REGISTER YOUR MODULAR ROUTES ---
app.include_router(users.router)
app.include_router(chat.router)

# Merged Welcome Message
@app.get("/")
async def root():
    return {
        "message": "Welcome to IntroConnect API - Running on Gemini",
        "status": "Fully Modular and Active"
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}