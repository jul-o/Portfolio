import { motion } from 'framer-motion';
import { ReactElement, useEffect } from 'react';
import classNames from 'utils/classNames';
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
}

const Experience = ({
	title,
	dates,
	technologies,
	tldr,
	body,
	isShown,
}: Props) => {
	const variants = {
		hidden: {
			display: 'none',
			opacity: 0,
			x: '100%',
		},
		shown: {
			display: 'inherit',
			opacity: 1,
			x: 0,
		},
	};

	return (
		<motion.div
			className={classNames(styles.root)}
			animate={isShown ? 'shown' : 'hidden'}
			variants={variants}
			transition={{ duration: 0.5 }}>
			<div className={styles.titles}>
				<h2>{title}</h2>
				<p className={styles.dates}>{dates}</p>
			</div>
			<div id="technologies" className={styles.technologies}>
				{technologies.map(({ name, percentage, color }) => (
					<span key={name}>
						<img
							src={`/icons/${color}-logo.svg`}
							alt=""
							className={color && styles[color]}
						/>
						<span className={color && styles[color]}>{name}</span>
					</span>
				))}
			</div>
			<div id="tldr" className={styles.tldr}>
				<h3>TL;DR :</h3>
				<ul>{tldr && tldr.map((item) => <li key={item}>{item}</li>)}</ul>
			</div>
			<div className={styles.body}>{body}</div>
		</motion.div>
	);
};

export default Experience;
