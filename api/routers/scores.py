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
    


@router.get("/scores", response_model=Union[List[ScoreOut], Error])
def get_all_scores(
    repo: ScoreRepository = Depends(),
):
    return repo.get_all()

@router.put("/scores/{score_id}", response_model=Union[ScoreOut, Error])
def update_score(
    score_id: int,
    score: ScoreIn,
    repo: ScoreRepository = Depends(),
) -> Union[Error, ScoreOut]:
    return repo.update(score_id, score)