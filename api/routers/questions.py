from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.questions import (
    Error,
    QuestionIn,
    QuestionOut,
    QuestionRepository
)


router = APIRouter()


@router.post("/questions", response_model=Union[QuestionOut, Error])
def create_question(
    question: QuestionIn,
    response: Response,
    repo: QuestionRepository = Depends(),
):
    response.status_code = 200
    return repo.create(question)


@router.get("/questions", response_model=Union[List[QuestionOut], Error])
def get_all_questions(
    repo: QuestionRepository = Depends(),
):
    return repo.get_all()


@router.put("/questions/{question_id}", response_model=Union[QuestionOut, Error])
def update_questiion(
    question_id: int,
    question: QuestionIn,
    repo: QuestionRepository = Depends(),
) -> Union[QuestionOut, Error]:
    return repo.update_question(question_id, question)


@router.delete("/questions/{question_id}", response_model=bool)
def delete_question(
    question_id: int,
    repo: QuestionRepository = Depends(),
) -> bool:
    return repo.delete_question(question_id)


@router.get("/questions/{question_id}", response_model=Optional[QuestionOut])
def get_one_question(
    question_id: int,
    response: Response,
    repo: QuestionRepository = Depends(),
) -> QuestionOut:
    question = repo.get_one(question_id)
    if question is None:
        response.status_code = 404
    return question
