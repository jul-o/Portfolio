import { ReactElement } from 'react';
import { Progress } from 'react-bulma-components';
import styles from '../styles/Experience.module.scss';

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
		<div>
			<div id="titles">
				<h1 className="title is-2">{title}</h1>
				<h1 className="title is-6">{dates}</h1>
			</div>
			<div id="technologies">
				{technologies.map(({ name, percentage, color }) => (
					<div className="technology" key={name}>
						<h1 className="title is-5">{name}</h1>
						{/* <div style={{ color: color && color }}>{percentage}%</div> */}
						<div className={color && styles[color]}>
							<Progress max={100} value={percentage} />
						</div>
					</div>
				))}
			</div>
			<div id="tldr" className={styles.tldr}>
				<h1 className="title is-5">TL;DR</h1>
				<ul>{tldr && tldr.map((item) => <li key={item}>{item}</li>)}</ul>
			</div>
			<div id="body">{body}</div>
		</div>
	);
};

export default Experience;
