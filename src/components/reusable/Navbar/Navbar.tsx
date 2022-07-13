import { useEffect, useState } from 'react';
import classNames from 'utils/classNames';
import styles from './Navbar.module.scss';

const Navbar = () => {
	const scrollTo = (target: string) => {
		window.history.pushState(null, null, `/${target}`);
		document.querySelector(target).scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<div id="navbar" className={styles.navbar}>
			<button
				onClick={() => {
					scrollTo('#about');
				}}>
				<span>Jules Sang</span>
			</button>
			<button
				onClick={() => {
					scrollTo('#experiences');
				}}>
				<span>Expériences professionnelles</span>
			</button>
			<button
				onClick={() => {
					scrollTo('#contact');
				}}>
				<span>Contact</span>
			</button>
		</div>
	);
};

export default Navbar;
