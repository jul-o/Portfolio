import { useEffect, useState } from 'react';
import classNames from 'utils/classNames';
import styles from './Navbar.module.scss';

const Navbar = () => {
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

	const scrollTo = (target: string) => {
		window.history.pushState(null, null, `/${target}`);
		document.querySelector(target).scrollIntoView({
			behavior: 'smooth',
		});
	};

	const [scrollingDown, setScrollingDown] = useState(false);

	// TODO: navbar disappears when scrolling down, reappears when scrolling up
	return (
		<div
			id="navbar"
			className={classNames(
				styles.navbar,
				scrollingDown && styles.navbar_scroll_down
			)}>
			{/* <a href="/#home"> */}
			<button
				onClick={() => {
					scrollTo('#home');
				}}>
				<span>Jules Sang</span>
			</button>
			{/* <a href="/#experiences"> */}
			<button
				onClick={() => {
					scrollTo('#experiences');
				}}>
				<span>Expériences professionnelles</span>
			</button>
			{/* <a href="/#contact"> */}
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
