Monday July 10th, 2023:
Began gathering, writing, and formatting python questions to be inserted into the questions database. Also began writing dialogue for the tutorial of the game, and the story elements introduced in the tutorial.

Tuesday July 11th, 2023:
Began writing the React Components for the Forgot Password, Recover Password, and Security Question functions for the frontend.

Wednesday July 12th, 2023:
Began writing FASTAPI authentication back-end using JWTdown open source libary built by Galvanize with Russ.
Finished the front-end React Component for Password Recovery at it's first step (Before it makes a GET request for the security question.)

Monday July 17th, 2023:
Began writing battle-test to test the React components in charge of handling the Battle Sequence, initializing the pages for the game, and setting up the components and hooks necessary to succesfully run a full battle-sequence without pulling questions from the back-end yet.

Tuesday July 18th, 2023:
Finished testing of battle-test and the React components. Now beginning to write the components into the actual project, and hooking the back-end into the game.

July 19th-July 25th, 2023:
Finally managed to get a working rendition of battle-test into the project. Created a few custom hooks for the game dialogue, fetching the question objects from the api/questions/{question_id} endpoint, got the overall game to work. just need to spend more time polishing up and adding some Quality of Life mechanics/functions.
Began and finished the security backend for adding security questions and answers to a database that is foreign keyed to the users. Removed the data types for security question and answer from the users database and fixed the queries accordingly.