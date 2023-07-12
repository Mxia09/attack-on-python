from fastapi import APIRouter, Depends, Response
from typing import Union, List
from queries.scores import (
    Error,
    ScoreIn, 
    ScoreRepository, 
    ScoreOut,)

router = APIRouter()


@router.post("/scores", response_model=Union[ScoreOut, Error])
def create_score(
    score: ScoreIn, 
    response: Response,
    repo: ScoreRepository = Depends()
    ):
    response.status_code = 400
    return repo.create(score)
    

# @router.get("/scores", response_model=Union[Error, List[ScoreOut]])
# def get_all(
#     repo: ScoreRepository = Depends()
# ):
#     return repo.get_all(),
@router.get("/scores", response_model=List[ScoreOut])
def get_all(
    repo: ScoreRepository = Depends(),
):
    return repo.get_all()