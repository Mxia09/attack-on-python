steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            username VARCHAR(100) NOT NULL UNIQUE,
            hashed_password VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            profile_picture TEXT NOT NULL,
            security_question TEXT NOT NULL,
            security_answer TEXT NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE scores (
            id SERIAL PRIMARY KEY NOT NULL,
            total_time VARCHAR(100),
            username VARCHAR(50),
            FOREIGN KEY (username) REFERENCES users(username)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE  scores;
        """
    ]
]
