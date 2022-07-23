import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'utils/classNames';
import styles from './UpButton.module.scss';

interface Props {
	className?: string;
}

const UpButton = ({ className }: Props) => {
	useEffect(() => {
		// onscroll
		const root = getRoot();
		root.addEventListener('scroll', () => {
			onScroll(updateIsScrollTop);
		});

		// remove listener on unmount
		return () => {
			root.removeEventListener('scroll', onScroll);
		};
	}, []);

	const [isScrollTop, setIsScrollTop] = useState(true);
	const updateIsScrollTop = useUpdateIsScrollTop(setIsScrollTop);

	useEffect(() => updateIsScrollTop(getRoot().scrollTop), []);

	return (
		<button
			className={classNames(className, styles.root, isScrollTop && styles.top)}
			onClick={scrollTop}>
			<FontAwesomeIcon icon={faArrowUp} />
		</button>
	);
};

const useUpdateIsScrollTop = (setIsScrollTop: Function) => {
	// not === 0 because the value is .6666667 on firefox android
	return (y: number) => setIsScrollTop(y < 1);
};

const getRoot = (): Element | null => {
	return typeof document !== 'undefined'
		? document.querySelector('#root')
		: null;
};

const onScroll = (updateIsScrollTop) => {
	updateIsScrollTop(getRoot().scrollTop);
};

const scrollTop = () => {
	getRoot().scrollTo({ top: 0, behavior: 'smooth' });
};

export default UpButton;
