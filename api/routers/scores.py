from fastapi import APIRouter, Depends, Response
from typing import Union, List
from queries.scores import (
    Error,
    ScoreIn,
    ScoreRepository,
    ScoreOut,)
from authenticator import authenticator

router = APIRouter()


@router.post("/api/scores", response_model=Union[ScoreOut, Error])
def create_score(
    score: ScoreIn,
    response: Response,
    repo: ScoreRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    response.status_code = 200
    return repo.create(score)



@router.get("/api/scores", response_model=Union[List[ScoreOut], Error])
def get_all_scores(
    repo: ScoreRepository = Depends(),
):
    return repo.get_all()


@router.delete("/api/scores/{score_id}", response_model=bool)
def delete_score(
    score_id: int,
    repo: ScoreRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> bool:
    return repo.delete_score(score_id)
