from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.users import (
    Error,
    UserIn,
    UserOut,
    UserRepository,
    UserUpdate
)


router = APIRouter()


@router.post("/users", response_model=Union[UserOut, Error])
def create_user(
    user: UserIn,
    response: Response,
    repo: UserRepository = Depends(),
):
    response.status_code = 200
    return repo.create_user(user)


@router.get("/users", response_model=List[UserOut])
def get_all_users(
    repo: UserRepository = Depends(),
):
    return repo.get_all()


@router.put("/users/{user_id}", response_model=UserOut)
def update_user(
    user_id: int,
    user: UserUpdate,
    repo: UserRepository = Depends(),
) -> UserOut:
    return repo.update_user(user_id, user)


@router.delete("/users/{user_id}", response_model=bool)
def delete_user(
    user_id: int,
    repo: UserRepository = Depends(),
) -> bool:
    return repo.delete_user(user_id)


@router.get("/users/{user_id}", response_model=Optional[UserOut])
def get_one_user(
    user_id: int,
    response: Response,
    repo: UserRepository = Depends(),
) -> UserOut:
    user = repo.get_user(user_id)
    if user is None:
        response.status_code = 404
    return user
