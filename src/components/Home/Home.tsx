import styles from './Home.module.scss';

const Home = () => {
	return (
		<div id="home" className={styles.root}>
			<div className={styles.title}>
				<h2 className={styles.iam}>
					<span>Bonjour, moi c'est Jules</span>
					<span className={styles.wave}>
						<img src="/wave.svg" width="48" height="48" />
					</span>
				</h2>
				<h3 className={styles.job}>Développeur frontend.</h3>
			</div>
		</div>
	);
};

export default Home;
