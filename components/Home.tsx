// styles import
import styles from '../styles/Home.module.css';
import { Button } from 'react-bulma-components';

export default () => {
    return (
        <div>
            <div className={`${styles.home} underline`}>
                Home
            </div>
            <div>
                <Button color="primary">Primary</Button>
            {/* <button className="button">yes</button> */}
            </div>
        </div>
    );
}