import { motion, Variants } from 'framer-motion';
import { ReactElement, useEffect } from 'react';
import classNames from 'utils/classNames';
// import { rootVariants } from 'utils/slideInVariants';
import styles from './Experience.module.scss';

interface Props {
	isShown: boolean;
	title: string;
	dates: string;
	technologies: Array<{
		name: string;
		percentage: number;
		color?: string;
	}>;
	tldr?: Array<string>;
	body?: ReactElement;
	variants?: Variants;
}

const Experience = ({
	title,
	dates,
	technologies,
	tldr,
	body,
	isShown,
	variants,
}: Props) => {
	const rootVariants: Variants = {
		notInViewport: {
			display: 'none',
			opacity: 0,
		},
		inViewport: {
			display: 'inherit',
			opacity: 1,
			transition: {
				duration: 0,
				when: 'beforeChildren',
				staggerChildren: 0.03,
			},
		},
	};

	return (
		<motion.div
			className={styles.root}
			animate={isShown ? 'inViewport' : 'notInViewport'}
			variants={rootVariants}>
			<div className={styles.titles}>
				<motion.h2 variants={variants}>{title}</motion.h2>
				<motion.p variants={variants} className={styles.dates}>
					{dates}
				</motion.p>
			</div>
			<div id="technologies" className={styles.technologies}>
				{technologies.map(({ name, percentage, color }) => (
					<motion.span variants={variants} key={name}>
						<img
							src={`/icons/${color}-logo.svg`}
							alt=""
							className={color && styles[color]}
						/>
						<span className={color && styles[color]}>{name}</span>
					</motion.span>
				))}
			</div>
			<div id="tldr" className={styles.tldr}>
				<motion.h3 variants={variants}>TL;DR :</motion.h3>
				<motion.ul variants={variants}>
					{tldr && tldr.map((item) => <li key={item}>{item}</li>)}
				</motion.ul>
			</div>
			<div className={styles.body}>{body}</div>
		</motion.div>
	);
};

export default Experience;
