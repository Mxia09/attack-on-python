from pydantic import BaseModel #  for data validation
from typing import List, Union, Optional #  function return types
from queries.pool import pool #  db connection pool object/contains connection settings to db

#  Queries use db connection, established through migrations, to interact with data in response to client requests.

class Error(BaseModel):
    message: str

class TestimonialIn(BaseModel):
    name: str
    review: str
    profile_picture: str
    comments: str

class TestimonialOut(BaseModel):
    id: int
    name: str
    review: str
    profile_picture: str
    comments: str

class TestimonialRepository:
    def create(self, testimonial: TestimonialIn) -> Union[TestimonialOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO testimonials
                            (name, review, profile_picture, comments)
                        VALUES
                            (%s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            testimonial.name,
                            testimonial.review,
                            testimonial.profile_picture,
                            testimonial.comments
                        ]
                    )
                    id = result.fetchone()[0]
                    old_data = testimonial.dict()
                    return TestimonialOut(id=id, **old_data)
        except Exception as e:
            print(e)
            return Error(message="Could not create testimonial")

    def get_one(self, testimonial_id: int) -> Optional[TestimonialOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            id,
                            name,
                            review,
                            profile_picture,
                            comments
                        FROM testimonials
                        WHERE id = %s
                        """,
                        [testimonial_id]
                    )
                    testimonial = result.fetchone()
                    if testimonial is None:
                        return None
                    return TestimonialOut(
                        id=testimonial[0],
                        name=testimonial[1],
                        review=testimonial[2],
                        profile_picture=testimonial[3],
                        comments=testimonial[4]
                    )
        except Exception as e:
            print(e)
            return Error(message="Could not get that testimonial")

    def get_all(self) -> Union[List[TestimonialOut], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, name, review, profile_picture, comments
                        FROM testimonials
                        ORDER BY id;
                        """
                    )
                    result = []
                    for testimonial in db:
                        testimonial = TestimonialOut(
                            id=testimonial[0],
                            name=testimonial[1],
                            review=testimonial[2],
                            profile_picture=testimonial[3],
                            comments=testimonial[4]
                        )
                        result.append(testimonial)
                    return result
        except Exception as e:
            print(e)
            return Error(message="Could not get all testimonials")

    def update_testimonial(self, testimonial_id: int, testimonial: TestimonialIn) -> Union[TestimonialOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE testimonials
                        SET name = %s,
                        review = %s,
                        profile_picture = %s,
                        comments = %s,
                        WHERE id = %s;
                        """,
                        [
                            testimonial.name,
                            testimonial.review,
                            testimonial.profile_picture,
                            testimonial.comments,
                            testimonial_id
                        ]
                    )
                    old_data = testimonial.dict()
                    return TestimonialOut(id=testimonial_id, **old_data)
        except Exception as e:
            print(e)
            return Error(message="Could not update the testimonial")

    def delete_testimonial(self, testimonial_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM testimonials
                        WHERE id = %s
                        """,
                        [testimonial_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False
