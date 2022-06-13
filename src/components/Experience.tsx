import { ReactElement } from 'react';
import styles from 'styles/modules/Experience.module.scss';

interface Props {
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

const Experience = ({ title, dates, technologies, tldr, body }: Props) => {
	return (
		<div className={styles.root}>
			<div className={styles.titles}>
				<h2>{title}</h2>
				<p className={styles.dates}>{dates}</p>
			</div>
			<div id="technologies" className={styles.technologies}>
				{technologies.map(({ name, percentage, color }) => (
					<div className={styles.technology} key={name}>
						<h3>{name}</h3>
						<div className={`${styles.progress} ${color && styles[color]}`}>
							<progress max={100} value={percentage} />
						</div>
					</div>
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
