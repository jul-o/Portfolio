import { Navbar as Bar } from "react-bulma-components";
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <Bar className={styles.navbar}>
            <Bar.Brand flexDirection="column" renderAs="a" href="#">
                <h1 className="title">Jules Sang</h1>
            </Bar.Brand>
            <Bar.Item renderAs="a" href="#">
                Compétences
            </Bar.Item>
            <Bar.Item renderAs="a" href="#">
                Expériences professionnelles
            </Bar.Item>
            <Bar.Item renderAs="a" href="#">
                Portfolio
            </Bar.Item>
            <Bar.Item renderAs="a" href="#">
                Contact
            </Bar.Item>
        </Bar>
    );
}

export default Navbar;