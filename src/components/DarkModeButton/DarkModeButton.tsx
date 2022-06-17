import styles from './DarkModeButton.module.scss';

const DarkModeButton = () => {
	return (
		<button className={styles.root}>
			<span>🌙</span>
		</button>
	);
};

export default DarkModeButton;
