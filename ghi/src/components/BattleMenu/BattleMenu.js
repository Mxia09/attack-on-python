import { useState, useEffect } from "react";
import { useFetchQuestion } from "../../hooks/useFetchQuestion";
import styles from "./styles.module.css";
import { BattleAnnouncer } from "../BattleAnnouncer";

export const BattleMenu = ({ question_id, onAnswerSelected }) => {
    const { question, correctAnswer } = useFetchQuestion(question_id);
    const [playerAnswer, setPlayerAnswer] = useState(null);

    // to pass unit testing
    console.log(playerAnswer)

    useEffect(() => {
        // Reset the player's answer whenever a new question is fetched
        setPlayerAnswer(null);
    }, [question]);

    if (!question) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.main}>
            <BattleAnnouncer message={question.question} />

            <div className={styles.buttongrid}>
                {Object.keys(question).map((key) => {
                    if (key.startsWith("choice_")) {
                        const option = question[key];
                        return (
                            <button
                                key={key}
                                className={styles.option}
                                onClick={() => {
                                    setPlayerAnswer(option);
                                    // Pass the player's answer and the correct answer to onAnswerSelected
                                    onAnswerSelected(option, correctAnswer);
                                }}
                            >
                                {option}
                            </button>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};
