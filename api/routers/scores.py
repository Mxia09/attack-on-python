from fastapi import APIRouter, Depends, Response
from typing import Union, List, Optional
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
    response.status_code = 200
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

@router.delete("/scores/{score_id}", response_model=bool)
def delete_score(
    score_id: int,
    repo: ScoreRepository = Depends(),
) -> bool:
    return repo.delete_score(score_id)

@router.get("/scores/{score_id}", response_model=Optional[ScoreOut])
def get_one_score(
    score_id: int,
    response: Response,
    repo: ScoreRepository = Depends(),
) -> ScoreOut:
    score = repo.get_one_score(score_id)
    if score is None:
        response.status_code = 404
    return score
