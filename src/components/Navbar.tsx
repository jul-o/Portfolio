import { Navbar as Bar } from 'react-bulma-components';
import styles from '../styles/modules/Navbar.module.scss';

const Navbar = () => {
	// TODO: nice navbar
	// TODO: navbar disappears when scrolling down, reappears when scrolling up
	return (
		<div>
			<Bar id="navbar" fixed="top" className={styles.navbar}>
				<Bar.Item renderAs="a" href="/#home">
					Jules Sang
				</Bar.Item>
				<Bar.Item renderAs="a" href="/#experiences">
					Expériences professionnelles
				</Bar.Item>
				<Bar.Item renderAs="a" href="/#contact">
					Contact
				</Bar.Item>
			</Bar>
		</div>
	);
};

export default Navbar;
