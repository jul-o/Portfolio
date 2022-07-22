import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import classNames from 'utils/classNames';
import { DARK, LIGHT } from 'utils/themes';
import styles from './DarkModeButton.module.scss';

interface Props {
	className?: string;
}

const DarkModeButton = ({ className }: Props) => {
	const { theme, setTheme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		// if there is no system theme, set theme to dark
		setTheme(typeof systemTheme === 'string' ? systemTheme : DARK);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === DARK ? LIGHT : DARK);
	};

	if (!mounted) return null;

	return (
		<button
			className={classNames(className, styles.root)}
			onClick={toggleTheme}>
			<span>{theme === DARK ? '💡' : '🌘'}</span>
		</button>
	);
};

export default DarkModeButton;
