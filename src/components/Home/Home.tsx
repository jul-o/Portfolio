import styles from './Home.module.scss';
import Wave from './Wave';
import { motion, TargetAndTransition } from 'framer-motion';
import React, { Ref } from 'react';
import classNames from 'utils/classNames';

const Home = ({ className }) => {
	const animation: TargetAndTransition = {
		x: ['100vw', '0vw'],
		transition: {
			ease: 'easeOut',
			duration: 1,
			delay: 1,
		},
	};

	const refBoundaries: Ref<HTMLDivElement> = React.createRef<HTMLDivElement>();

	return (
		<>
			<div className={styles.boundaries} ref={refBoundaries} />
			<div id="home" className={classNames(className, styles.root)}>
				<div className={styles.title}>
					<h2 className={styles.iam}>
						<motion.div
							drag
							whileDrag={{ scale: 1.5 }}
							dragConstraints={refBoundaries}
							dragTransition={{ bounceStiffness: 500 }}>
							Bonjour, moi c'est Jules
						</motion.div>
						<Wave dragBoundaries={refBoundaries} />
					</h2>
					<motion.div
						className={styles.jobDraggableWrapper}
						drag
						whileDrag={{ scale: 1.5 }}
						dragConstraints={refBoundaries}
						dragTransition={{ bounceStiffness: 500 }}>
						<motion.h3
							className={styles.job}
							animate={animation}
							initial={{ x: '100vw' }}>
							Développeur frontend.
						</motion.h3>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Home;
