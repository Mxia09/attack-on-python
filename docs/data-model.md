# Data models

### Questions

| Name   | Type   | Unique | Optional | Description               |
| -------- | ------ | ------ | -------- | ------------------------- |
| id       | SERIAL | true   | false    | Question ID (Primary Key) |
| question | TEXT   | false  | false    | The question itself       |
| choice_1 | TEXT   | false  | false    | Choice 1                  |
| choice_2 | TEXT   | false  | false    | Choice 2                  |
| choice_3 | TEXT   | false  | false    | Choice 3                  |
| choice_4 | TEXT   | false  | false    | Choice 4                  |
| answer   | TEXT   | false  | false    | Correct answer            |
| hint     | TEXT   | false  | false    | Hint for the question     |
| response | TEXT   | false  | false    | Response to the question  |

### Testimonials

| Name        | Type    | Unique | Optional | Description                |
| -------------- | ------- | ------ | -------- | -------------------------- |
| id             | SERIAL  | true   | false    | Testimonial ID (Primary Key)|
| name           | VARCHAR(50) | false | false    | Name of the reviewer       |
| review         | VARCHAR(50) | false | false    | Testimonial review         |
| profile_picture | TEXT    | false  | false    | URL of the profile picture |
| comments       | VARCHAR(25) | false | false    | Additional comments        |

### Users Table

| Name           | Type        | Unique | Optional | Description                 |
| ---------------- | ----------- | ------ | -------- | --------------------------- |
| id               | SERIAL      | true   | false    | User ID (Primary Key)       |
| first_name       | VARCHAR(50) | false  | false    | User's first name           |
| last_name        | VARCHAR(50) | false  | false    | User's last name            |
| username         | VARCHAR(100)| true   | false    | User's username (Unique)    |
| hashed_password  | VARCHAR(100)| false  | false    | Hashed user password        |
| email            | VARCHAR(100)| false  | false    | User's email address        |
| profile_picture  | TEXT        | false  | false    | URL of the profile picture  |
| security_question| TEXT        | false  | false    | User's security question    |
| security_answer  | TEXT        | false  | false    | User's security answer      |

### Scores Table

| Name     | Type        | Unique | Optional | Description                        |
| ----------- | ----------- | ------ | -------- | ---------------------------------- |
| id          | SERIAL      | true   | false    | Score ID (Primary Key)             |
| total_time  | VARCHAR(100)| false  | true     | Total time for the user's activity |
| username    | VARCHAR(50) | false  | true     | User's username (Foreign Key)      |
