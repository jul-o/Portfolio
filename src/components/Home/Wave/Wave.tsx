import { motion } from 'framer-motion';
import React from 'react';
import styles from './Wave.module.scss';

const Wave = () => {
	const refBoundaries = React.createRef<HTMLDivElement>();

	const animation = {
		rotate: [0, 20, -15, 15, 0],
		transition: {
			ease: 'easeInOut',
			duration: 1,
			loop: Infinity,
			repeatDelay: 2,
		},
	};

	return (
		<>
			<div className={styles.boundaries} ref={refBoundaries} />
			<motion.div
				className={styles.wave}
				animate={animation}
				drag
				whileDrag={{ scale: 1.5 }}
				dragConstraints={refBoundaries}
				dragTransition={{ bounceStiffness: 500 }}>
				<img src="/icons/wave.svg" width="48" height="48" draggable="false" />
			</motion.div>
		</>
	);
};

export default Wave;
