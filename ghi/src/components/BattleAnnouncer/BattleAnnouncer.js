import styles from './styles.module.css';
import { useTypedMessage } from '../../hooks/useTypedMessage';


export const BattleAnnouncer = ({ message }) => {
    const typedMessage = useTypedMessage(message);

    return <div className={styles.main} style={{ height: 80 }}>
        <div className={styles.message}> {typedMessage} </div>
    </div>
}
