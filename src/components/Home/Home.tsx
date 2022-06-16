// styles import
import Image from 'next/image';
import myPic from 'styles/assets/me.png';
import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import aboutMe from 'data_frontend/me.json';
import Hobbies from './Hobbies';
import Portrait from './Portrait';
import ParaglidingModal from './Modals/ParaglidingModal';
import WindsurfingModal from './Modals/WindsurfingModal';
import ClibingModal from './Modals/ClimbingModal';

const Home = () => {
	const {
		paragliding,
		climbing,
		windsurfing,
		openParagliding,
		openClimbing,
		openWindsurfing,
		closeModal,
	} = useLogic();

	return (
		<div id="home" className={styles.root}>
			<h1>Parlons un peu de moi</h1>
			<div className={styles.title}>
				<h2 className={styles.iam}>Bonjour, moi c'est</h2>
				<h2 className={styles.name}>Jules Sang.</h2>
				<h3 className={styles.job}>Développeur frontend.</h3>
			</div>

			<div className={styles.columns}>
				<div className={styles.column}>
					<div className={styles.text}>
						{aboutMe.map((item, index) => (
							<p key={index}>{item}</p>
						))}
					</div>
				</div>
				<div className={styles.column}>
					<Portrait />
					<Hobbies
						className={styles.hobbies}
						openParagliding={openParagliding}
						openClimbing={openClimbing}
						openWindsurfing={openWindsurfing}
					/>
				</div>
			</div>
			{paragliding && <ParaglidingModal onClose={closeModal} />}
			{climbing && <ClibingModal onClose={closeModal} />}
			{windsurfing && <WindsurfingModal onClose={closeModal} />}
		</div>
	);
};

// TODO: separate file when each component has its own folder
const useLogic = () => {
	const [paragliding, setParagliding] = useState(false);
	const [climbing, setClimbing] = useState(false);
	const [windsurfing, setWindsurfing] = useState(false);

	const openParagliding = () => {
		setClimbing(false);
		setWindsurfing(false);
		setParagliding(true);
	};

	const openClimbing = () => {
		setParagliding(false);
		setWindsurfing(false);
		setClimbing(true);
	};

	const openWindsurfing = () => {
		setParagliding(false);
		setClimbing(false);
		setWindsurfing(true);
	};

	const closeModal = () => {
		setParagliding(false);
		setClimbing(false);
		setWindsurfing(false);
	};

	return {
		paragliding,
		climbing,
		windsurfing,
		openParagliding,
		openClimbing,
		openWindsurfing,
		closeModal,
	};
};

export default Home;
