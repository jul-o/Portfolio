import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { DARK, LIGHT } from 'utils/themes';
import styles from './DarkModeButton.module.scss';

const DarkModeButton = () => {
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
		<button className={styles.root} onClick={toggleTheme}>
			<span>{theme === DARK ? '💡' : '🌘'}</span>
		</button>
	);
};

export default DarkModeButton;
