steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE dummy (
            id SERIAL PRIMARY KEY NOT NULL,
            required_limited_text VARCHAR(1000) NOT NULL,
            required_unlimited_text TEXT NOT NULL,
            required_date_time TIMESTAMP NOT NULL,
            automatically_set_date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            required_integer INTEGER NOT NULL,
            required_money MONEY NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE dummy;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE scores (
            id SERIAL PRIMARY KEY NOT NULL,
            player_1 INTEGER NOT NULL,
            player_2 INTEGER NOT NULL,
            player_3 INTEGER NOT NULL,
            player_4 INTEGER NOT NULL,
            player_5 INTEGER NOT NULL,
            player_6 INTEGER NOT NULL,
            player_7 INTEGER NOT NULL,
            player_8 INTEGER NOT NULL,
            player_9 INTEGER NOT NULL,
            player_10 INTEGER NOT NULL
        );
        """,

        # "Down" SQL statement
        """
        DROP TABLE big_dummy;
        """
    ]
]
