# backend/crud_routes.py
from fastapi import APIRouter, Body
from pydantic import BaseModel
from bson import ObjectId

# Pydantic model
class Item(BaseModel):
    name: str

def serialize(item):
    if not item:
        return None
    item["_id"] = str(item["_id"])
    return item

def init_routes(db):
    router = APIRouter()

    @router.get("/items")
    def get_items():
        return [serialize(x) for x in db.items.find()]

    @router.post("/items")
    def create_item(item: Item):
        db.items.insert_one(item.dict())
        return {"status": "ok"}

    @router.get("/items/{id}")
    def get_item(id: str):
        item = db.items.find_one({"_id": ObjectId(id)})
        return serialize(item)

    @router.put("/items/{id}")
    def update_item(id: str, item: Item):
        db.items.update_one({"_id": ObjectId(id)}, {"$set": item.dict()})
        return {"status": "ok"}

    @router.delete("/items/{id}")
    def delete_item(id: str):
        db.items.delete_one({"_id": ObjectId(id)})
        return {"status": "ok"}

    return router
