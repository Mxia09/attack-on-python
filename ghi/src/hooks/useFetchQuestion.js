import { useState, useEffect } from "react";

export const useFetchQuestion = (question_id) => {
    const [question, setQuestion] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null)

    useEffect(() => {
        const fetchQuestionFromDatabase = async () => {
            try {
                const url = `${process.env.REACT_APP_API_HOST}/api/questions/${question_id}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch question from the database.");
                }

                const data = await response.json();
                setQuestion(data);

                // Extract the correct answer from the response and set it as a separate state
                setCorrectAnswer(data.answer);
            } catch (error) {
                console.error(error);
            }
        };

        fetchQuestionFromDatabase();
    }, [question_id]);

    // Return question and correct answer as an object
    return { question, correctAnswer };
};

