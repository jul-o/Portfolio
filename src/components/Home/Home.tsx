import styles from './Home.module.scss';
import Wave from './Wave';

// @keyframes slideIn {
// 	0% {
// 		transform: translateX(200vw);
// 	}
// 	50% {
// 		transform: translateX(200vw);
// 	}
// 	100% {
// 		transform: translateX(0);
// 	}

const Home = () => {
	return (
		<div id="home" className={styles.root}>
			<div className={styles.title}>
				<h2 className={styles.iam}>
					<div>Bonjour, moi c'est Jules</div>
					<Wave />
				</h2>
				<h3 className={styles.job}>Développeur frontend.</h3>
			</div>
		</div>
	);
};

export default Home;
