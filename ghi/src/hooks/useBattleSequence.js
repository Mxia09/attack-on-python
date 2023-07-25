// import { useEffect } from "react";
// import { useState } from "react";
// import { opponentStats, playerStats } from "../shared";
//     const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
//     const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);


import { useState } from "react";
import { opponentStats, playerStats } from "../shared";


export const useBattleSequence = () => {
    const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
    const [announcerMessage, setAnnouncerMessage] = useState()

    const handlePlayerAnswer = (playerAnswer, correctAnswer) => {
        // Check if the selectedAnswer matches the correctAnswer
        if (playerAnswer === correctAnswer) {
            // Correct answer: Decrease opponentHealth
            setOpponentHealth((opponentHealth) => opponentHealth - playerStats.attack);
            setAnnouncerMessage(`${playerStats.name} has predicted the incoming spell and has counter-attacked!`)
        } else {
            // Incorrect answer: Decrease playerHealth
            setPlayerHealth((playerHealth) => playerHealth - opponentStats.attack);
            setAnnouncerMessage(`${playerStats.name} has failed to predict the incoming spell and has taken damage!`)
        }
    };

    return {
        playerHealth,
        opponentHealth,
        handlePlayerAnswer,
        announcerMessage,
    };
};
