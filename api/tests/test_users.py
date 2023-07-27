from fastapi.testclient import TestClient
from main import app
from queries.users import UserRepository

client = TestClient(app)

class ExampleUserRepository:
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

class FakeUserRepository:
    def get_user(self, email: str):
        if email == "test@email.com":
            return {
                "id": "1",
                "first_name": "max",
                "last_name": "wang",
                "username": "mwang",
                "email": "test@email.com",
                "profile_picture": "picture_string",
                "security_question": "question_string",
                "security_answer": "answer_string",
                "hashed_password": "hashed_password"
            }
        else:
            return None

def test_get_one_user():
    # arrange
    app.dependency_overrides[UserRepository] = FakeUserRepository

    # act
    response = client.get("/api/users/test@email.com")
    expected = {
        "id": "1",
        "first_name": "max",
        "last_name": "wang",
        "username": "mwang",
        "email": "test@email.com",
        "profile_picture": "picture_string",
        "security_question": "question_string",
        "security_answer": "answer_string"
    }

    # assert
    assert response.status_code == 200
    assert response.json() == expected


def test_get_all_users():

    # arrange
    app.dependency_overrides[UserRepository] = ExampleUserRepository
    response = client.get("/api/users")
    # act
    app.dependency_overrides = {}
    # assert
    assert response.status_code == 200
