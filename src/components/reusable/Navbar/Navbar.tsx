import { useEffect, useState } from 'react';
import classNames from 'utils/classNames';
import styles from './Navbar.module.scss';

interface Props {
	className?: string;
}

const Navbar = ({ className }: Props) => {
	const scrollTo = (target: string) => {
		window.history.pushState(null, null, `/${target}`);
		document.querySelector(target).scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<div id="navbar" className={classNames(className, styles.navbar)}>
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
