import { useState } from "react";
import { opponentStats, playerStats } from "../shared";
import { wait } from "../shared";

export const useBattleSequence = () => {
    const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
    const [announcerMessage, setAnnouncerMessage] = useState()
    const [playerAnimation, setPlayerAnimation] = useState('static')
    const [opponentAnimation, setOpponentAnimation] = useState('static')

    const handlePlayerAnswer = async (playerAnswer, correctAnswer) => {
        // Check if the selectedAnswer matches the correctAnswer
        if (playerAnswer === correctAnswer) {
            // Correct answer: Decrease opponentHealth
            setOpponentHealth((opponentHealth) => opponentHealth - playerStats.attack);
            setAnnouncerMessage(`${playerStats.name} has predicted the incoming spell and has counter-attacked!`)
            setPlayerAnimation('attack')
            await wait(500)
            setPlayerAnimation('static')
            await wait(500)
            setOpponentAnimation('damage')
            await wait(500)
            setOpponentAnimation('static')
        } else {
            // Incorrect answer: Decrease playerHealth
            setPlayerHealth((playerHealth) => playerHealth - opponentStats.attack);
            setAnnouncerMessage(`${playerStats.name} has failed to predict the incoming spell and has taken damage!`)
            setOpponentAnimation('attack')
            await wait(500)
            setOpponentAnimation('static')
            await wait(500)
            setPlayerAnimation('damage')
            await wait(500)
            setPlayerAnimation('static')

        }
    };

    return {
        playerHealth,
        opponentHealth,
        handlePlayerAnswer,
        announcerMessage,
        playerAnimation,
        opponentAnimation
    };
};
