from pydantic import BaseModel
from typing import List, Union
from queries.pool import pool

class Error(BaseModel):
    message: str

class ScoreIn(BaseModel):
    total_time: str
    username: str

class ScoreOut(BaseModel):
    id: int
    total_time: str
    username: str

class ScoreOutWithUser(BaseModel):
    id: int
    total_time: str
    username: str

class ScoreRepository:
    def create(self, score: ScoreIn) -> ScoreOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO scores
                            (total_time, username)
                        VALUES
                            (%s, %s)
                        RETURNING id;
                        """,
                        [
                            score.total_time,
                            score.username,
                        ]
                    )
                    id = result.fetchone()[0]
                    return self.score_in_to_out(id, score)
        except Exception as e:
            print(e)
            return {"message": "Unable to save score"}

    def get_all(self) -> Union[List[ScoreOutWithUser], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            s.id,
                            s.total_time,
                            u.username
                        FROM scores s
                        INNER JOIN users u ON s.username = u.username
                        ORDER BY s.id;
                        """
                    )
                    result = []
                    for score in db:
                        score = ScoreOutWithUser(
                            id=score[0],
                            total_time=score[1],
                            username=score[2]
                        )
                        result.append(score)
                    print(result)
                    return result
        except Exception as e:
            print(e)
            return {"message": "Unable to load scores"}

    def delete_score(self, score_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM scores
                        WHERE id = %s
                        """,
                        [score_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def score_in_to_out(self, id: int, score: ScoreIn):
        old_data = score.dict()
        return ScoreOut(id=id, **old_data)
