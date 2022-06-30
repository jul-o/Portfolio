import { TargetAndTransition, Variant, Variants } from 'framer-motion';

declare type VariantsWithTransitions = {
	[key: string]: TargetAndTransition;
};

export const rootVariants: VariantsWithTransitions = {
	notInViewport: {
		opacity: 0,
		transition: {
			duration: 0,
			when: 'afterChildren',
			staggerChildren: 0.07,
		},
	},
	inViewport: {
		opacity: 1,
		transition: {
			duration: 0,
			when: 'beforeChildren',
			staggerChildren: 0.07,
		},
	},
};

export const childrenVariants: VariantsWithTransitions = {
	notInViewport: {
		opacity: 0,
		x: '50vw',
		transition: {
			duration: 0.5,
			bounce: 0,
		},
	},
	inViewport: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			bounce: 0,
		},
	},
};
