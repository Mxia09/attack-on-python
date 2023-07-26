from fastapi.testclient import TestClient
from main import app
from queries.testimonials import TestimonialRepository

client = TestClient(app)

class EmptyTestimonialRepository:
    def get_all(self):
        return [
        {
            "id": 0,
            "name": "string",
            "review": "string",
            "profile_picture": "string"
        }
        ]

class CreateTestimonialRepository:
    def create(self, testimonial):
        result = {
            "id": 1,
            "name": "name string",
            "review": "review string",
            "profile_picture": "picture string",
            "comments": "comments_string"
            }
        result.update(testimonial)
        return result

def test_init():
    assert 1 == 1

def test_get_all_testimonials():

    #arrange
    app.dependency_overrides[TestimonialRepository] = EmptyTestimonialRepository

    response = client.get("/api/testimonials")
    #act
    app.dependency_overrides = {}
    #assert
    assert response.status_code == 200

def test_create_testimonials():

    #arrange
    app.dependency_overrides[TestimonialRepository] = CreateTestimonialRepository

    json = {
        "name": "name_string",
        "review": "review_string",
        "profile_picture": "picture_string",
        "comments": "comments_string"
        }

    expected = {
        "id": 1,
        "name": "name_string",
        "review": "review_string",
        "profile_picture": "picture_string",
        "comments": "comments_string"
        }

    response = client.post("/api/testimonials", json=json)
    #act
    app.dependency_overrides = {}
    #assert
    assert response.status_code == 200
    assert response.json() == expected
