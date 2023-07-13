# **Week 13**

- Monday:

  1. Project Ideation:
     We talked amongst ourselves and created our name Attack On Python which is going to be a game that tests your python skills
  2. Logo:
     Russell created a logo with out help to further connect us as a team.
  3. Rubric:
     We looked over the rubric and discussed how we were going to meet the minimum requierements to get a good score on our project and also set ourselves up with stretch goals.

- Tuesday:

  1. GHI :
     We stated an excalidraw with everyone in it and started to map out how our homepage, signup, and signin pages. We also want to implement scores which will get the scores of all players however, we feel like it is almost a stretch goal.

- Wednesday:

  1. Endpoints:
     We dicussed as a group that we want to have endpoints for users, questions, scores to start off with and expand
  2. DB:
     We also decided we are going to go with PostgressSQL as most of the SEIRS recommend it

- Thursday:

  1. I worked on the project for a short time as I was more focused on Data Structures

- Friday:
  1. Issue Stories:
     We created user stories to start us off in our project to start coding.
  2. Docker containers
  3. wireframe
  4. Logo

# **Week 14**

- Monday:

  1. Project StartUp:
     We created out project and started the app with fastApi and started to see examples of postgres to start of our database too.
  2. Docker containers
  3. wireframe
  4. Logo

- Tuesday:

  1. MVP
  2. Docker containers
  3. wireframe
  4. Logo

- Wednesday:

  1. MVP
  2. Docker containers
  3. wireframe
  4. Logo

- Thursday:

  1. MVP
  2. Docker containers
  3. wireframe
  4. Logo

- Friday:
  1. MVP
  2. Docker containers
  3. wireframe
  4. Logo

# **Week 15**

- Monday:

  1. MVP
  2. Docker containers
  3. wireframe
  4. Logo

- Tuesday:

  1. MVP
  2. Docker containers
  3. wireframe
  4. Logo

- Wednesday:

  1. Users Backend:
     I finished the users backend it was giving me complications bc users had a foreign key to Security which has a security question to retreive password if forgotten.
  2. Starting Frontend Auth:
     Both I and Marvin where tasked to start the frontend auth and Russ/Max were given the backEnd.
  3. Also studied some sorting methods when not working on the project.

- Thursday:

  1. MVP
  2. Docker containers
  3. wireframe
  4. Logo

- Friday:

  1. MVP
  2. Docker containers
  3. wireframe
  4. Logo

  This is security db table that I thought would be Stretch Goals
  [
  # "Up" SQL statement
  """
  CREATE TYPE security AS ENUM ('Mothers Maiden Name', 'Favorite Color', 'Pets First Name');
  CREATE TABLE securities (
  id SERIAL PRIMARY KEY NOT NULL,
  question security NOT NULL,
  answer VARCHAR(50) NOT NULL
  );
  """,
  # "Down" SQL statement
  """
  DROP TABLE securities;
  """
  ],
