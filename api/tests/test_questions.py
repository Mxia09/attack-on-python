from fastapi.testclient import TestClient
from main import app
from queries.questions import QuestionRepository

client = TestClient(app)

class ExampleQuestionRepository:
    def get_all(self):
        return [
            {
                "id": 0,
                "question": "string",
                "choice_1": "string",
                "choice_2": "string",
                "choice_3": "string",
                "choice_4": "string",
                "answer": "string",
                "hint": "string",
                "response": "string"
            }
        ]

class CreateQuestionRepository:
    def create(self, question):
        result = {
            "id": 1,
            "question": "question_string",
            "choice_1": "string1",
            "choice_2": "string2",
            "choice_3": "string3",
            "choice_4": "string4",
            "answer": "answer_string",
            "hint": "hint_string",
            "response": "response_string"
        }
        result.update(question)
        return result

def test_get_all_questions():

    # arrange
    app.dependency_overrides[QuestionRepository] = ExampleQuestionRepository

    response = client.get("/api/questions")
    # act
    app.dependency_overrides = {}
    # assert
    assert response.status_code == 200

def test_create_question():

    # arrange
    app.dependency_overrides[QuestionRepository] = CreateQuestionRepository

    json = {
        "question": "question_string",
        "choice_1": "string1",
        "choice_2": "string2",
        "choice_3": "string3",
        "choice_4": "string4",
        "answer": "answer_string",
        "hint": "hint_string",
        "response": "response_string"
    }

    expected = {
        "id": 1,
        "question": "question_string",
        "choice_1": "string1",
        "choice_2": "string2",
        "choice_3": "string3",
        "choice_4": "string4",
        "answer": "answer_string",
        "hint": "hint_string",
        "response": "response_string"
    }

    response = client.post("/api/questions", json=json)
    # act
    app.dependency_overrides = {}
    # assert
    assert response.status_code == 200
    assert response.json() == expected
