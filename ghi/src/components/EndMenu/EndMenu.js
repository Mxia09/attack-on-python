import styles from './styles.module.css'

export const EndMenu = ({ winner, onStartClick }) => {
    return (
        <div className={styles.main}>
            <div>
                <h1>{winner.name} has won! </h1>
            </div>
            <div>
                <button className={styles.startButton} onClick={onStartClick}>
                    Play Again
                </button>
            </div>
        </div>
    );
};