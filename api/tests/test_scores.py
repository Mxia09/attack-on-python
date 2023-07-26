from fastapi.testclient import TestClient
from main import app
from queries.scores import ScoreRepository

client = TestClient(app)

class EmptyScoresRepository:
    def get_all(self):
        return [
        {
            "id": 0,
            "player_1": 0,
            "player_2": 0,
            "player_3": 0,
            "player_4": 0,
            "player_5": 0,
            "player_6": 0,
            "player_7": 0,
            "player_8": 0,
            "player_9": 0,
            "player_10": 0
        }
        ]

class CreateScoreRepository:
    def create(self, score):
        result = {
            "id": 1,
            "player_1": 0,
            "player_2": 0,
            "player_3": 0,
            "player_4": 0,
            "player_5": 0,
            "player_6": 0,
            "player_7": 0,
            "player_8": 0,
            "player_9": 0,
            "player_10": 0
            }
        result.update(score)
        return result

def test_get_all_scores():

    #arrange
    app.dependency_overrides[ScoreRepository] = EmptyScoresRepository

    response = client.get("/api/scores")
    #act
    app.dependency_overrides = {}
    #assert
    assert response.status_code == 200

def test_create_scores():

    #arrange
    app.dependency_overrides[ScoreRepository] = CreateScoreRepository

    json = {
            "player_1": 10,
            "player_2": 10,
            "player_3": 10,
            "player_4": 10,
            "player_5": 10,
            "player_6": 10,
            "player_7": 10,
            "player_8": 10,
            "player_9": 10,
            "player_10": 10
            }

    expected = {
            "id": 1,
            "player_1": 10,
            "player_2": 10,
            "player_3": 10,
            "player_4": 10,
            "player_5": 10,
            "player_6": 10,
            "player_7": 10,
            "player_8": 10,
            "player_9": 10,
            "player_10": 10
            }

    response = client.post("/api/scores", json=json)
    #act
    app.dependency_overrides = {}
    #assert
    assert response.status_code == 200
    assert response.json() == expected
