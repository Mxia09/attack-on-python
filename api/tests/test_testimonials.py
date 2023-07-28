from fastapi.testclient import TestClient #send test requests to fastapi
from main import app #fast api application
from queries.testimonials import TestimonialRepository #interact with the db

client = TestClient(app) #instance of test client

class ExampleTestimonialRepository: #override actual db/ only need method we are testing
    def get_all(self):
        return [
            {
                "id": 0,
                "name": "string",
                "review": "string",
                "profile_picture": "string",
                "comments": "comments_string"
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

def test_get_all_testimonials():

    # arrange
    app.dependency_overrides[TestimonialRepository] = ExampleTestimonialRepository

    response = client.get("/api/testimonials")
    # act
    app.dependency_overrides = {}
    # assert
    assert response.status_code == 200

def test_create_testimonials():

    # arrange
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
    # act
    app.dependency_overrides = {}
    # assert
    assert response.status_code == 200
    assert response.json() == expected
