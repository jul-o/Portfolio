import { ReactElement, useEffect } from 'react';
import classNames from 'utils/classNames';
import styles from './Experience.module.scss';
import styled from '@emotion/styled';

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
	return (
		<div className={classNames(styles.root, isShown && styles.is_shown)}>
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
		</div>
	);
};

export default Experience;
