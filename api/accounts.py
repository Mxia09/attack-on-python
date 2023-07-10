from pydantic import BaseModel
from typing import Optional
from pymongo import MongoClient


class UserIn(BaseModel): 
    first_name: str 
    last_name: str 
    email: str 
    password: str 
    confirm_password: str 
    secuity_q: str 
    answer: str 
    
def get_user(self, username: str) -> Optional[UserOutWithPassword]:
    user = users_collection.find_one({"$or": [{"username": username}, {"email": username}]})
    if user is None:
        return None
    user_data = {
        "id": str(user["_id"]),
        "first_name": user["first_name"],
        "last_name": user["last_name"],
        "username": user["username"],
        "hashed_password": user["hashed_password"],
        "email": user["email"],
        "profile_picture": user["profile_picture"],
    }
    return UserOutWithPassword(**user_data)