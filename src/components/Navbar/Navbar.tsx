import styles from './Navbar.module.scss';

const Navbar = () => {
	// TODO: navbar disappears when scrolling down, reappears when scrolling up
	return (
		<div id="navbar" className={styles.navbar}>
			<a href="/#home">
				<span>Jules Sang</span>
			</a>
			<a href="/#experiences">
				<span>Expériences professionnelles</span>
			</a>
			<a href="/#contact">
				<span>Contact</span>
			</a>
		</div>
	);
};

export default Navbar;
