from fastapi.testclient import TestClient
from main import app
from queries.scores import ScoreRepository

client = TestClient(app)

class ExampleScoresRepository:
    def get_all(self):
        return [
            {
                "id": 0,
                "total_time": "string",
                "username": "string"
            }
        ]

def test_get_all_scores():

    # arrange
    app.dependency_overrides[ScoreRepository] = ExampleScoresRepository

    response = client.get("/api/scores")
    # act
    app.dependency_overrides = {}
    # assert
    assert response.status_code == 200
