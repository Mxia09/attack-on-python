from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.testimonials import (
    Error,
    TestimonialIn,
    TestimonialOut,
    TestimonialRepository
)

router = APIRouter()

@router.post("/api/testimonials", response_model=Union[TestimonialOut, Error])
def create_testimonial(
    testimonial: TestimonialIn,
    response: Response,
    repo: TestimonialRepository = Depends(),
):
    response.status_code = 200
    return repo.create(testimonial)

@router.get("/api/testimonials", response_model=Union[List[TestimonialOut], Error])
def get_all_testimonials(
    repo: TestimonialRepository = Depends(),
):
    return repo.get_all()

@router.put("/api/testimonials/{testimonial_id}", response_model=Union[TestimonialOut, Error])
def update_testimonial(
    testimonial_id: int,
    testimonial: TestimonialIn,
    repo: TestimonialRepository = Depends(),
) -> Union[TestimonialOut, Error]:
    return repo.update_testimonial(testimonial_id, testimonial)

@router.delete("/api/testimonials/{testimonial_id}", response_model=bool)
def delete_testimonial(
    testimonial_id: int,
    repo: TestimonialRepository = Depends(),
) -> bool:
    return repo.delete_testimonial(testimonial_id)

@router.get("/api/testimonials/{testimonial_id}", response_model=Optional[TestimonialOut])
def get_one_testimonial(
    testimonial_id: int,
    response: Response,
    repo: TestimonialRepository = Depends(),
) -> TestimonialOut:
    testimonial = repo.get_one(testimonial_id)
    if testimonial is None:
        response.status_code = 404
    return testimonial
