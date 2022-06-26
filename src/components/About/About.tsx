import React, { useEffect, useState } from 'react';
import aboutMe from 'data_frontend/me.json';
import classNames from 'utils/classNames';
import useViewportObserver from 'utils/hooks/useViewportObserver';
import styles from './About.module.scss';
import Hobbies from './Hobbies';
import ClibingModal from './Modals/ClimbingModal';
import ParaglidingModal from './Modals/ParaglidingModal';
import WindsurfingModal from './Modals/WindsurfingModal';
import Portrait from './Portrait';
import { motion, Variants } from 'framer-motion';

const About = () => {
	const {
		paragliding,
		climbing,
		windsurfing,
		openParagliding,
		openClimbing,
		openWindsurfing,
		closeModal,
		rootRef,
		isInViewport,
		variants,
	} = useLogic();

	return (
		<div id="about" className={styles.root}>
			<motion.div
				variants={variants}
				animate={isInViewport ? 'inViewport' : 'notInViewport'}
				initial={'notInViewport'}
				ref={rootRef}>
				<motion.h1 variants={variants} className={styles.title}>
					Parlons un peu de moi
				</motion.h1>
				<div className={styles.columns}>
					<div className={styles.column}>
						<div className={styles.text}>
							{aboutMe.map((item, index) => (
								<motion.p variants={variants} key={index}>
									{item}
								</motion.p>
							))}
						</div>
					</div>
					<div className={styles.column}>
						<motion.div variants={variants}>
							<Portrait />
						</motion.div>
						<Hobbies
							variants={variants}
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
			</motion.div>
		</div>
	);
};

const useLogic: Function = (): {
	paragliding: boolean;
	climbing: boolean;
	windsurfing: boolean;
	openParagliding: Function;
	openClimbing: Function;
	openWindsurfing: Function;
	closeModal: Function;
	rootRef: React.RefObject<HTMLDivElement>;
	isInViewport: boolean;
	variants: Variants;
} => {
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

	const rootRef = React.createRef<HTMLDivElement>();
	const [isInViewport, setIsInViewport] = useState(false);
	useViewportObserver(setIsInViewport, rootRef);

	const variants: Variants = {
		notInViewport: {
			opacity: 0,
			x: '20vw',
		},
		inViewport: {
			opacity: 1,
			x: 0,
			transition: {
				when: 'beforeChildren',
				bounce: 0,
				staggerChildren: 0.07,
			},
		},
	};

	return {
		paragliding,
		climbing,
		windsurfing,
		openParagliding,
		openClimbing,
		openWindsurfing,
		closeModal,
		rootRef,
		isInViewport,
		variants,
	};
};

export default About;
