import { motion, TargetAndTransition } from 'framer-motion';
import React, { Ref, RefObject } from 'react';
import classNames from 'utils/classNames';
import styles from './Wave.module.scss';

interface Props {
	className?: string;
	dragBoundaries?: RefObject<HTMLDivElement>;
}

const Wave = ({ className, dragBoundaries }: Props) => {
	// const refBoundaries: Ref<HTMLDivElement> = React.createRef<HTMLDivElement>();

	const animation: TargetAndTransition = {
		rotate: [0, 20, -15, 15, 0],
		transition: {
			ease: 'easeInOut',
			duration: 1,
			repeat: Infinity,
			repeatDelay: 2,
		},
	};

	return (
		<motion.div
			className={classNames(className, styles.wave)}
			animate={animation}
			drag
			whileDrag={{ scale: 1.5 }}
			dragConstraints={dragBoundaries}
			dragTransition={{ bounceStiffness: 500 }}>
			<img src="/icons/wave.svg" width="48" height="48" draggable="false" />
		</motion.div>
	);
};

export default Wave;
