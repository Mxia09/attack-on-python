from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool

class Error(BaseModel):
    message: str

class ScoreIn(BaseModel): 
    username: str 
    score: int
    
class ScoreOut(BaseModel):
    id: int
    username: str 
    score: int

class ScoreRepository:
    def create(self, score: ScoreIn) -> ScoreOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                            INSERT INTO scores
                                (username, score)
                            VALUES
                                (%s, %s)
                            RETURNING id;
                            """,
                            [
                                score.username,
                                score.score,
                            ]
                    )
                    id = result.fetchone()[0]
                    # old_data = score.dict()
                    return self.score_in_to_out(id, score)
        except Exception as e:
            print(e)
            return {"message": "Unable to save score"}
    
    def get_all(self) -> Union[Error, List[ScoreOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, 
                        username, 
                        score
                        FROM scores
                        ORDER BY id;
                        """
                    )
                    result = []
                    for score in db: 
                        score = ScoreOut(
                                id=score[0],
                                username=score[1],
                                score=score[2],
                        )
                        result.append(score)

                    return result 
        except Exception as e:
            print(e)
            return {"message": "Unable to load scores"}

    def get_one_score(self, score_id: int) -> Optional[ScoreOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, 
                        username, 
                        score
                        FROM scores
                        WHERE id = %s
                        """,
                        [score_id]
                    ) 
                    score = result.fetchone()
                    if score is None:
                        return None
                    return ScoreOut(
                                id=score[0],
                                username=score[1],
                                score=score[2],
                    )
                    # return self.score_in_to_out(record)
        except Exception as e:
            print(e)
            return {"message": "Unable to load your score"}
        
        
    def update(self, score_id: int, score: ScoreIn,) -> Union[ScoreOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE scores
                        SET username = %s,
                            score = %s 
                        WHERE id = %s
                        """,
                        [
                            score.username,
                            score.score,
                            score_id,
                        ]
                    )
                    return self.score_in_to_out(score_id, score)
        except Exception as e:
            print(e)
            return {"message": "Unable to update new score"}

    
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
