from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import users, questions, scores, testimonials, security
from authenticator import authenticator

app = FastAPI()
app.include_router(authenticator.router)
app.include_router(users.router)
app.include_router(questions.router)
app.include_router(scores.router)
app.include_router(testimonials.router)
app.include_router(security.router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "module": 3,
            "week": 17,
            "day": 5,
            "hour": 19,
            "min": "00"
        }
    }


@app.get("/")
def root():
    return {"message": "You hit the root path!"}
