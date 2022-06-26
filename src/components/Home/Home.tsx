import styles from './Home.module.scss';
import Wave from './Wave';
import { motion, TargetAndTransition } from 'framer-motion';

const Home = () => {
	const animation: TargetAndTransition = {
		x: ['100vw', '0vw'],
		transition: {
			ease: 'easeOut',
			duration: 1,
			delay: 1,
		},
	};

	return (
		<div id="home" className={styles.root}>
			<div className={styles.title}>
				<h2 className={styles.iam}>
					<div>Bonjour, moi c'est Jules</div>
					<Wave />
				</h2>
				<motion.h3
					animate={animation}
					initial={{ x: '100vw' }}
					className={styles.job}>
					Développeur frontend.
				</motion.h3>
			</div>
		</div>
	);
};

export default Home;
