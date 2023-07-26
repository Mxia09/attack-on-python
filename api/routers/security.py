from fastapi import APIRouter, Depends, Response
from typing import Union, List
from queries.security import (
    Error,
    SecurityIn,
    SecurityOut,
    SecurityRepository,)
from authenticator import authenticator

router = APIRouter()


@router.post("/api/security_questions", response_model=Union[SecurityOut, Error])
def create_security_question(
    security: SecurityIn,
    response: Response,
    repo: SecurityRepository = Depends(),
    ):
    response.status_code = 200
    return repo.create(security)



@router.get("/api/security_questions", response_model=Union[List[SecurityOut], Error])
def get_all_security_questions(
    repo: SecurityRepository = Depends(),
):
    return repo.get_all()


@router.delete("/api/security_questions/{security_question_id}", response_model=bool)
def delete_security_questions(
    security_question_id: int,
    repo: SecurityRepository = Depends(),
):
    return repo.delete(security_question_id)
