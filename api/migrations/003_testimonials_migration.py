steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE testimonials (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(50) NOT NULL,
            review VARCHAR(50) NOT NULL,
            profile_picture TEXT NOT NULL,
            comments VARCHAR(25) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE testimonials;
        """
    ]
]

#Defines testimonials database schema. This ensures the database table exists.
