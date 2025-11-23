from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from crud_routes import init_routes
import os

app = FastAPI()

# ===== CORS =====
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # หรือเฉพาะ frontend domain เช่น "https://localhost"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = MongoClient(os.getenv("MONGO_URL"))
db = client["cruddb"]

app.include_router(init_routes(db), prefix="/api")
