steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE testimonials (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(50) NOT NULL,
            review VARCHAR(1000) NOT NULL,
            profile_picture TEXT NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE testimonials;
        """
    ]
]
