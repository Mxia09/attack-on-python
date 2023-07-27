# APIs

## Questions

- **Method**: `POST`, `GET`, `GET`, `PUT`, `DELETE`,
- **Path**: `/api/questions`, `/api/questions/{question_id}`

Input:

```json
{
  "question": "string",
  "choice_1": "string",
  "choice_2": "string",
  "choice_3": "string",
  "choice_4": "string",
  "answer": "string",
  "hint": "string",
  "response": "string"
}
```
Output:

```json
{
  "id": 0,
  "question": "string",
  "choice_1": "string",
  "choice_2": "string",
  "choice_3": "string",
  "choice_4": "string",
  "answer": "string",
  "hint": "string",
  "response": "string"
}
```

Creating a new question saves the question, four choices, answer, hint, and response. This adds a new question to the database which is fetched during the game play.

## Scores

- **Method**: `GET`, `POST`, `DELETE`
- **Path**: `/api/scores`

Input:

```json
{
  "total_time": "string",
  "username": "string"
}
```

Output:

```json
{
  "id": 0,
  "total_time": "string",
  "username": "string"
}
```

Creating a new score saves the total time to complete the game and the user's username. This adds a new score to the database which is displayed on the leaderboard.

## Testimonials

- **Method**:  `GET`, `GET`, `POST`, `PUT`, `DELETE`
- **Path**: `/api/testimonials`, `/api/testimonials/{testimonial_id}`

Input:

```json
{
  "name": "string",
  "review": "string",
  "profile_picture": "string",
  "comments": "string"
}
```

Output:

```json
{
  "id": 0,
  "name": "string",
  "review": "string",
  "profile_picture": "string",
  "comments": "string"
}
```

Creating a new testimonial saves the name, review, profile picture, and comments. This adds a new testimonial to the database which is displayed for logged in users to see on the home page.

## Users

- **Method**:  `GET`, `GET`, `POST`, `PUT`, `DELETE`
- **Path**: `/api/users`, `/api/users/{email}`

Input:

```json
{
  "first_name": "string",
  "last_name": "string",
  "username": "string",
  "password": "string",
  "email": "string",
  "profile_picture": "string",
  "security_question": "string",
  "security_answer": "string"
}
```

Output:

```json
{
  "access_token": "string",
  "token_type": "Bearer",
  "user": {
    "id": "string",
    "first_name": "string",
    "last_name": "string",
    "username": "string",
    "email": "string",
    "profile_picture": "string",
    "security_question": "string",
    "security_answer": "string"
  }
}
```
The users API will get, create, update, or delete an a user account. A potential user will need to input all fields mentioned for the input to be successfully added to the database.
