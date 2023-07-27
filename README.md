# Attack on Python

- Marvin Xia
- Jorge Landeros
- Russell Cruz
- Max Wang
- Fred Bowden

Attack on Python - Attack on Python is a quiz-formatted game where beginner devs can test their Python knowledge against the evil cpu Pythons by answering their coding questions.

## Design

- [API design](docs/apis.md)
- [Data model](docs/data-model.md)
- [GHI](docs/ghi.md)

## Intended market

Our target audience is individuals who are in the process of learning the fundamentals of Python programming.

## Functionality

- Users of the site will be taken to our home page where a play button will be presented at the center of the screen. The nav bar offers a login link, signup link, and a link to the about page where they can read about the basic premise of the game and learn a little bit about the devs by clicking links to our linkedin and gitlab pages. There is also a light and dark mode available in the nav that is a toggle switch, where you can click the sun for light mode and the moon for dark mode. The footer offers every link the nav does along with a link to the support email.
- After clicking the play button they will be redirected to the login page where returning users can input their information. A signup link is present in the nav bar on the top right for those who are first time users. Once signed up they will be logged in and redirected to the home page where they can click the play button and begin the game. Once the play button is clicked the user is redirected to the play page where a start-game button will be available.
- Once the game begins the battle sequence initiates where a python will be standing across from the user's character and a quiz question will be presented with 4 multiple choice answers. The user has 3 lives, which means if they fail to answer 3 questions correctly the Python will have won the game. The user must answer 5 questions correctly to defeat the Python and win the game.
- Logged in users have access to a leaderboards page which presents itself in the navbar and footer links, where they can see usernames and the time it took for them to defeat the python. Logged in users can also see their stats and create a testimonial which will be displayed on the home page for other logged in users to see.

## Project Initialization

Attack on Python is available at the following link:
- Game:

- Docs: https://mar-5-pt-pythonfastapi.mod3projects.com/docs#/default/create_user_api_users_post
