import styles from './UpButton.module.scss';
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import classNames from 'utils/classNames';

const UpButton = () => {
	useEffect(() => {
		// onscroll
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	const [isScrollTop, setIsScrollTop] = useState(false);

	const onScroll = () => {
		setIsScrollTop(window.scrollY === 0);
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			className={classNames(styles.root, isScrollTop && styles.top)}
			onClick={scrollTop}>
			<FaArrowUp />
		</button>
	);
};

export default UpButton;
