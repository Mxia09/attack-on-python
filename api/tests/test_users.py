from fastapi.testclient import TestClient
from main import app
from queries.users import UserRepository
from jwtdown_fastapi.authentication import Authenticator

client = TestClient(app)

class FakeAuthenticator:
    def get_current_account_data(self):
        return {
            "id": "string",
            "first_name": "string",
            "last_name": "string",
            "username": "string",
            "email": "string",
            "profile_picture": "string",
            "security_question": "string",
            "security_answer": "string",
            "hashed_password": "hashedpassword"
        }

class EmptyUserRepository:
    def get_all(self):
        return [
        {
            "id": "string",
            "first_name": "string",
            "last_name": "string",
            "username": "string",
            "email": "string",
            "profile_picture": "string",
            "security_question": "string",
            "security_answer": "string"
        }
        ]

class CreateUserRepository:
    def create_user(self, user):
        result = {
        "first_name": "max",
        "last_name": "wang",
        "username": "mwang",
        "password": "wangpassword",
        "email": "wang@email.com",
        "profile_picture": "wang.png",
        "security_question": "What is your cats name?",
        "security_answer": "levi"
    }
        result.update(user)
        return result

    # def get_user(self, username):
    #     return {
    #         "username": username,
    #         "hashed_password": "hashedpassword",
    #     }

def test_get_all_users():

    #arrange
    app.dependency_overrides[UserRepository] = EmptyUserRepository

    response = client.get("/api/users")
    #act
    app.dependency_overrides = {}
    #assert
    assert response.status_code == 200

def test_create_users():
    #arrange
    app.dependency_overrides[UserRepository] = CreateUserRepository
    # app.dependency_overrides[Authenticator] = FakeAuthenticator

    json = {
        "first_name": "max",
        "last_name": "wang",
        "username": "mwang",
        "password": "wangpassword",
        "email": "wang@email.com",
        "profile_picture": "wang.png",
        "security_question": "What is your cats name?",
        "security_answer": "levi"
    }

    expected = {
        "id": 1,
        "first_name": "max",
        "last_name": "wang",
        "username": "mwang",
        "password": "wangpassword",
        "email": "wang@email.com",
        "profile_picture": "wang.png",
        "security_question": "What is your cats name?",
        "security_answer": "levi"
    }

    #act
    response = client.post("/api/users", json=json)
    app.dependency_overrides = {}

    #assert
    assert response.status_code == 200
    assert response.json() == expected
