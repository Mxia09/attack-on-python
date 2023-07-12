from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool

class Error(BaseModel):
    message: str

class ScoreIn(BaseModel): 
    player_1: int
    player_2: int
    player_3: int
    player_4: int
    player_5: int
    player_6: int
    player_7: int
    player_8: int
    player_9: int
    player_10: int
    
class ScoreOut(BaseModel):
    id: int
    player_1: int
    player_2: int
    player_3: int
    player_4: int
    player_5: int
    player_6: int
    player_7: int
    player_8: int
    player_9: int
    player_10: int

class ScoreRepository:
    def get_all(self) -> Union[Error, List[ScoreOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, 
                        player_1, 
                        player_2, 
                        player_3, 
                        player_4, 
                        player_5,
                        player_6, 
                        player_7, 
                        player_8, 
                        player_9, 
                        player_10
                        FROM scores
                        ORDER BY id;
                        """
                    )
                    result = []
                    for score in db: 
                        score = ScoreOut(
                                id=score[0],
                                player_1=score[1],
                                player_2=score[2],
                                player_3=score[3],
                                player_4=score[4],
                                player_5=score[5],
                                player_6=score[6],
                                player_7=score[7],
                                player_8=score[8],
                                player_9=score[9],
                                player_10=score[10],
                        )
                        result.append(score)

                    return result 
                # return [
                #     ScoreOut(   
                #             id=score[0],
                #             player_1=score[1],
                #             player_2=score[2],
                #             player_3=score[3],
                #             player_4=score[4],
                #             player_5=score[5],
                #             player_6=score[6],
                #             player_7=score[7],
                #             player_8=score[8],
                #             player_9=score[9],
                #             player_10=score[10],
                #             )
                #     for score in db
                # ]
                
        except Exception as e:
            print(e)
            return {"message": "Unable to load scores"}

            
        
    def create(self, score: ScoreIn) -> ScoreOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                            INSERT INTO scores
                                (player_1, player_2, player_3, player_4, player_5,
                                player_6, player_7, player_8, player_9, player_10)
                            VALUES
                                (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                            RETURNING id;
                            """,
                            [
                                score.player_1,
                                score.player_2,
                                score.player_3,
                                score.player_4,
                                score.player_5,
                                score.player_6,
                                score.player_7,
                                score.player_8,
                                score.player_9,
                                score.player_10,
                            ]
                    )
                    id = result.fetchone()[0]
                    old_data = score.dict()
                    return ScoreOut(id=id, **old_data)
        except Exception as e:
            print(e)
            return {"message": "Unable to save score"}