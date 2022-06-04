// styles import
import styles from '../styles/Home.module.css';

export default () => {
    return (
        <div>
            <div className={`${styles.home}`}>
                Home
            </div>
            <div>
            <button className={styles.button}>yes</button>
            </div>
        </div>
    );
}