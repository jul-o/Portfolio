import { useEffect, useState } from 'react';
import classNames from 'utils/classNames';
import styles from './Navbar.module.scss';

const Navbar = () => {
	const [scrollingDown, setScrollingDown] = useState(false);

	useEffect(() => {
		let previousScrollValue = window.scrollY;
		const onScroll = () => {
			const currentScrollValue = window.scrollY;
			setScrollingDown(currentScrollValue > previousScrollValue);
			previousScrollValue = currentScrollValue;
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	// TODO: navbar disappears when scrolling down, reappears when scrolling up
	return (
		<div
			id="navbar"
			className={classNames(
				styles.navbar,
				scrollingDown && styles.navbar_scroll_down
			)}>
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
