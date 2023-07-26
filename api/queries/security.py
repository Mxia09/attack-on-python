from pydantic import BaseModel
from typing import List, Union
from queries.pool import pool

class Error(BaseModel):
    message: str

class SecurityIn(BaseModel):
    security_question: str
    security_answer: str
    username: str

class SecurityOut(BaseModel):
    id: int
    security_question: str
    security_answer: str
    username: str

class SecurityOutWithUser(BaseModel):
    id: int
    security_question: str
    security_answer: str
    username: str

class SecurityRepository:
    def create(self, security: SecurityIn) -> SecurityOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO security
                            (security_question, security_answer, username)
                        VALUES
                            (%s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            security.security_question,
                            security.security_answer,
                            security.username,
                        ]
                    )
                    id = result.fetchone()[0]
                    return self.security_in_to_out(id, security)
        except Exception as e:
            print(e)
            return {"message": "Unable to save security question and answer"}

    def get_all(self) -> Union[List[SecurityOutWithUser], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            sq.id,
                            sq.security_question,
                            sq.security_answer,
                            u.username
                        FROM security sq
                        INNER JOIN users u ON sq.username = u.username
                        ORDER BY sq.id;
                        """
                    )
                    result = []
                    for security in db:
                        security = SecurityOutWithUser(
                            id=security[0],
                            security_question=security[1],
                            security_answer=security[2],
                            username=security[3]
                        )
                        result.append(security)
                    return result
        except Exception as e:
            print(e)
            return {"message": "Unable to load security questions and answers"}

    def delete(self, security_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM security
                        WHERE id = %s
                        """,
                        [security_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def security_in_to_out(self, id: int, security: SecurityIn):
        old_data = security.dict()
        return SecurityOut(id=id, **old_data)
