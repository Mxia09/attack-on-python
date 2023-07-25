steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE questions (
            id SERIAL PRIMARY KEY NOT NULL,
            question TEXT NOT NULL,
            choice_1 TEXT NOT NULL,
            choice_2 TEXT NOT NULL,
            choice_3 TEXT NOT NULL,
            choice_4 TEXT NOT NULL,
            answer TEXT NOT NULL,
            hint TEXT NOT NULL,
            response TEXT NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE questions;
        """
    ]
]
