import { useBattleSequence } from "../../hooks";
import { playerStats, opponentStats } from "../../shared";
import React from "react";
import { useState, useEffect } from "react";
import { PlayerSummary } from "../PlayerSummary";
import { wait } from "../../shared";
import styles from "./styles.module.css";
import { BattleAnnouncer } from "../BattleAnnouncer";
import { BattleMenu } from "../BattleMenu";

export const Battle = ({ onGameEnd }) => {
    const { playerHealth,
        opponentHealth,
        handlePlayerAnswer,
        announcerMessage }
        = useBattleSequence();
    const [currentQuestionId, setCurrentQuestionId] = useState(1);

    useEffect(() => {
        // Check if the player or opponent has lost all health
        if (playerHealth <= 0 || opponentHealth <= 0) {
            (async () => {
                await wait(1000);
                onGameEnd(playerHealth <= 0 ? opponentStats : playerStats);
            })();
        }
    }, [playerHealth, opponentHealth, onGameEnd]);

    const handlePlayerAnswerCallback = (playerAnswer, correctAnswer) => {
        // Handle the player's answer using the useBattleSequence hook
        handlePlayerAnswer(playerAnswer, correctAnswer);

        // Move to the next question
        setCurrentQuestionId((prevId) => prevId + 1);
    };

    return (
        <div style={{ width: 750 }} >
            <div className={styles.opponent} >
                <PlayerSummary
                    health={opponentHealth}
                    main={false}
                    name={opponentStats.name}
                    level={opponentStats.level}
                    maxHealth={opponentStats.maxHealth}
                />
            </div>
            <div className={styles.gameImages} style={{ width: 1500 }}>
                <div className={styles.playerSprite} style={{ width: 1500 }}>
                    <img
                        alt={playerStats.name}
                        src={playerStats.img}
                        className={styles.playerAnimation}
                        style={{ height: 250, right: 0 }}
                    />
                </div>
            </div>
            <div className={styles.opponentSprite}>
                <img
                    src={opponentStats.img}
                    alt={opponentStats.name}
                    className={styles.opponentAnimation}
                    style={{ height: 200 }}
                />
            </div>

            <div className={styles.user}>
                <div className={styles.summary}>
                    <PlayerSummary
                        main={true}
                        health={playerHealth}
                        name={playerStats.name}
                        level={playerStats.level}
                        maxHealth={playerStats.maxHealth}
                    />
                </div>
                <div>
                    <div className={styles.hud}>
                        <div className={styles.hudChild}>
                            <BattleMenu
                                question_id={currentQuestionId}
                                onAnswerSelected={handlePlayerAnswerCallback}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Add BattleAnnouncer component to display messages */}
            <BattleAnnouncer message={announcerMessage} />
        </div>
    );
};
