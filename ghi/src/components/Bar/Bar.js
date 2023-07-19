import styles from './styles.module.css'

export const Bar = ({ label, value, MaxValue }) => {
    return (
        <div className={styles.main}>
            <div className={styles.label}>{label}</div>

            <div className={styles.max}
            style={{ width: `${(value / MaxValue) * 100}%`}}>
            </div>
        </div>
    )
}