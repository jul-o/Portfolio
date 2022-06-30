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
import { rootVariants, childrenVariants } from 'utils/slideInVariants';
import useLogic from './hooks';

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
	} = useLogic();

	return (
		<div id="about" className={styles.root} ref={rootRef}>
			<motion.div
				variants={rootVariants}
				animate={isInViewport ? 'inViewport' : 'notInViewport'}
				initial={'notInViewport'}>
				<motion.h1 variants={childrenVariants} className={styles.title}>
					Parlons un peu de moi
				</motion.h1>
				<div className={styles.columns}>
					<div className={styles.column}>
						<div className={styles.text}>
							{aboutMe.map((item, index) => (
								<motion.p variants={childrenVariants} key={index}>
									{item}
								</motion.p>
							))}
						</div>
					</div>
					<div className={styles.column}>
						<motion.div variants={childrenVariants}>
							<Portrait />
						</motion.div>
						<Hobbies
							variants={childrenVariants}
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

export default About;
