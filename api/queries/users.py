from pydantic import BaseModel
from typing import List, Union, Optional
from queries.pool import pool


class DuplicateUserError(ValueError):
    message: str

class DuplicateUserError(ValueError):
    pass

class UserIn(BaseModel):
    first_name: str
    last_name: str
    username: str
    password: str
    email: str
    profile_picture: str
    security_question: str
    security_answer: str


class UserUpdate(BaseModel):
    first_name: Optional[str]
    last_name: Optional[str]
    username: Optional[str]
    password: Optional[str]
    email: Optional[str]
    profile_picture: Optional[str]
    security_question: Optional[str]
    security_answer: Optional[str]


class UserOut(BaseModel):
    id: str
    first_name: str
    last_name: str
    username: str
    email: str
    profile_picture: str
    security_question: str
    security_answer: str

class UserWithPassword(UserOut):
    hashed_password: str

class UserOutWithPassword(UserOut):
    hashed_password: str


class UserRepository:
    def create_user(self, user: UserIn, hashed_password: str) -> UserOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO users
                            (first_name, last_name, username, hashed_password, email, profile_picture, security_question, security_answer)
                        VALUES
                            (%s, %s, %s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            user.first_name,
                            user.last_name,
                            user.username,
                            hashed_password,
                            user.email,
                            user.profile_picture,
                            user.security_question,
                            user.security_answer
                        ]
                    )
                    id = result.fetchone()[0]
                    old_data = user.dict()
                    return UserOutWithPassword(id=id, **old_data, hashed_password=hashed_password)
        except Exception as e:
            print(e)
            return {"Error": "Could not create User"}
    def get_user(self, username: str) -> UserOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            id,
                            first_name,
                            last_name,
                            username,
                            hashed_password,
                            email,
                            profile_picture,
                            security_question,
                            security_answer
                        FROM users
                        WHERE username = %s
                        or email = %s
                        """,
                    [
                        username,
                        username
                    ]
                    )
                    user = result.fetchone()
                    if user is None:
                        return None
                    return UserOutWithPassword(
                        id=user[0],
                        first_name=user[1],
                        last_name=user[2],
                        username=user[3],
                        hashed_password=user[4],
                        email=user[5],
                        profile_picture=user[6],
                        security_question=user[7],
                        security_answer=user[8]
                    )
        except Exception as e:
            print(e)
            return {"Error": "Could not get that user"}
    def get_all(self) -> List[UserOutWithPassword]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, first_name, last_name, username, hashed_password, email, profile_picture, security_question, security_answer
                        FROM users
                        ORDER BY id;
                        """
                    )
                    result = []
                    for user in db:
                        user = UserOutWithPassword(
                            id=user[0],
                            first_name=user[1],
                            last_name=user[2],
                            username=user[3],
                            hashed_password=user[4],
                            email=user[5],
                            profile_picture=user[6],
                            security_question=user[7],
                            security_answer=user[8]
                        )
                        result.append(user)
                    return result
        except Exception as e:
            print(e)
            return {"Error": "Could not get all Users"}
    def update_user(self, user_id: int, user: UserUpdate, hashed_password: str) -> UserOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE users
                        SET first_name = %s,
                        last_name = %s,
                        username = %s,
                        hashed_password = %s,
                        email = %s,
                        profile_picture = %s,
                        security_question = %s,
                        security_answer = %s
                        """,
                        [
                            user.first_name,
                            user.last_name,
                            user.username,
                            hashed_password,
                            user.email,
                            user.profile_picture,
                            user.security_question,
                            user.security_answer
                        ]
                    )
                    old_data = user.dict()
                    return UserOutWithPassword(id=user_id, **old_data, hashed_password=hashed_password)
        except Exception as e:
            print(e)
            return {"Error": "Could not update that User"}
    def delete_user(self, user_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM users
                        WHERE id = %s
                        """,
                        [user_id]
                    )
        except Exception as e:
            print(e)
            return {"Error": "Could not delete User"}
