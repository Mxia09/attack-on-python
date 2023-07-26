from pydantic import BaseModel
from typing import List, Union, Optional
from queries.pool import pool


class Error(BaseModel):
    message: str


class QuestionIn(BaseModel):
    question: str
    choice_1: str
    choice_2: str
    choice_3: str
    choice_4: str
    answer: str
    hint: str
    response: str


class QuestionOut(BaseModel):
    id: int
    question: str
    choice_1: str
    choice_2: str
    choice_3: str
    choice_4: str
    answer: str
    hint: str
    response: str


class QuestionRepository:
    def create(self, question: QuestionIn) -> Union[QuestionOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO questions
                            (
                                question,
                                choice_1,
                                choice_2,
                                choice_3,
                                choice_4,
                                answer,
                                hint,
                                response
                            )
                        VALUES
                            (%s, %s, %s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            question.question,
                            question.choice_1,
                            question.choice_2,
                            question.choice_3,
                            question.choice_4,
                            question.answer,
                            question.hint,
                            question.response
                        ]
                    )
                    id = result.fetchone()[0]
                    old_data = question.dict()
                    return QuestionOut(id=id, **old_data)
        except Exception as e:
            print(e)
            return {"Error": "Could not create Question"}

    def get_one(self, question_id: int) -> Optional[QuestionOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            id,
                            question,
                            choice_1,
                            choice_2,
                            choice_3,
                            choice_4,
                            answer,
                            hint,
                            response
                        FROM questions
                        WHERE id = %s
                        """,
                        [question_id]
                    )
                    user = result.fetchone()
                    if user is None:
                        return None
                    return QuestionOut(
                            id=user[0],
                            question=user[1],
                            choice_1=user[2],
                            choice_2=user[3],
                            choice_3=user[4],
                            choice_4=user[5],
                            answer=user[6],
                            hint=user[7],
                            response=user[8]
                    )
        except Exception as e:
            print(e)
            return {"message": "Could not get that question"}

    def get_all(self) -> Union[List[QuestionOut], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, question, choice_1, choice_2, choice_3, choice_4, answer, hint, response
                        FROM questions
                        ORDER BY id;
                        """
                    )
                    result = []
                    for question in db:
                        question = QuestionOut(
                            id=question[0],
                            question=question[1],
                            choice_1=question[2],
                            choice_2=question[3],
                            choice_3=question[4],
                            choice_4=question[5],
                            answer=question[6],
                            hint=question[7],
                            response=question[8]
                        )
                        result.append(question)
                    return result
        except Exception as e:
            print(e)
            return {"Error": "Could not get all Questions"}

    def update_question(self, question_id: int, question: QuestionIn) -> Union[QuestionOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE questions
                        SET question = %s,
                        choice_1 = %s,
                        choice_2 = %s,
                        choice_3 = %s,
                        choice_4 = %s,
                        answer = %s,
                        hint = %s,
                        response = %s
                        WHERE id = %s;
                        """,
                        [
                            question.question,
                            question.choice_1,
                            question.choice_2,
                            question.choice_3,
                            question.choice_4,
                            question.answer,
                            question.hint,
                            question.response,
                            question_id
                        ]
                    )
                    old_data = question.dict()
                    return QuestionOut(id=question_id, **old_data)
        except Exception as e:
            print(e)
            return {"Error": "Could not update the Question"}
    def delete_question(self, question_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM questions
                        WHERE id = %s
                        """,
                        [question_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False
