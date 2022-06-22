import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import classNames from 'utils/classNames';
import styles from './UpButton.module.scss';

const UpButton = () => {
	useEffect(() => {
		// onscroll
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	const [isScrollTop, setIsScrollTop] = useState(true);
	const updateIsScrollTop = useUpdateIsScrollTop(setIsScrollTop);

	useEffect(() => updateIsScrollTop(window.scrollY), []);

	const onScroll = () => {
		updateIsScrollTop(window.scrollY);
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

const useUpdateIsScrollTop = (setIsScrollTop: Function) => {
	// not === 0 because the value is .6666667 on firefox android
	return (y: number) => setIsScrollTop(y < 1);
};

export default UpButton;
