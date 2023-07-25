from fastapi import APIRouter, Depends, Response, Request, status, HTTPException
from typing import List, Optional
from queries.users import DuplicateUserError, UserIn, UserOut, UserRepository, UserUpdate, UserOutWithPassword
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel


class UserForm(BaseModel):
    username: str
    password: str


class UserToken(Token):
    user: UserOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.post("/api/users", response_model=UserToken | HttpError)
async def create_user(
    info: UserIn,
    request: Request,
    response: Response,
    users: UserRepository = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)

    try:
        user = users.create_user(info, hashed_password)
    except DuplicateUserError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create a user with those credentials",
        )
    form = UserForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, users)
    return UserToken(user=user, **token.dict())


@router.get("/token", response_model=UserToken | None)
async def get_token(
    request: Request,
    user: UserOutWithPassword = Depends(
        authenticator.try_get_current_account_data
    ),
) -> UserToken | None:
    if user and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "user": user,
        }


@router.get("/api/users", response_model=List[UserOut])
def get_all_users(
    repo: UserRepository = Depends(),
):
    return repo.get_all()


@router.put("/api/users/{user_id}", response_model=UserOut)
def update_user(
    user_id: int,
    user: UserUpdate,
    repo: UserRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    # Must be Logged In to Do this request
):
    hashed_password = authenticator.hash_password(user.password)
    record = repo.update_user(user_id, user, hashed_password)
    return record


@router.delete("/api/users/{user_id}", response_model=bool)
def delete_user(
    user_id: int,
    repo: UserRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    repo.delete_user(user_id)
    return True


@router.get("/api/users/{email}", response_model=Optional[UserOut])
def get_one_user(
    email: str,
    response: Response,
    repo: UserRepository = Depends(),
) -> UserOut:
    user = repo.get_user(email)
    if user is None:
        response.status_code = 404
    return user
