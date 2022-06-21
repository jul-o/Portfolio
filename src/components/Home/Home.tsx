import classNames from 'utils/classNames';
import styles from './Home.module.scss';

const Home = () => {
	return (
		<div id="home" className={styles.root}>
			<div className={styles.title}>
				<h2 className={styles.iam}>
					<div>Bonjour, moi c'est Jules</div>
					<div
						className={classNames(styles.wave, styles.animated)}
						onAnimationEnd={(e) => {
							(e.target as HTMLDivElement).classList.remove(styles.animated);
						}}
						onMouseEnter={(e) => {
							(e.currentTarget as HTMLDivElement).classList.add(
								styles.animated
							);
						}}
						onTouchStart={(e) => {
							(e.currentTarget as HTMLDivElement).classList.add(
								styles.animated
							);
						}}>
						<img src="/wave.svg" width="48" height="48" />
					</div>
				</h2>
				<h3 className={styles.job}>Développeur frontend.</h3>
			</div>
		</div>
	);
};

export default Home;
