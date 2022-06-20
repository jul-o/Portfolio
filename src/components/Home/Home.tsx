// styles import
import styles from './Home.module.scss';

const Home = () => {
	return (
		<div id="home" className={styles.root}>
			<div className={styles.title}>
				<h2 className={styles.iam}>Bonjour, moi c'est</h2>
				<h2 className={styles.name}>Jules Sang.</h2>
				<h3 className={styles.job}>Développeur frontend.</h3>
			</div>
		</div>
	);
};

export default Home;
