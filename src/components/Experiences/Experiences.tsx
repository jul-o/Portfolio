import Experience from 'components/Experiences/Experience';
import { useEffect, useState } from 'react';
import styles from './Experiences.module.scss';
import experiences from 'data_frontend/experiences.json';
import classNames from 'utils/classNames';

const Experiences = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	// useEffect(() => {
	// 	console.log(styles);
	// 	console.log(styles['selected_margin--0']);
	// });

	return (
		<div id="experiences" className={styles.root}>
			<h1>Mes expériences de développeur</h1>
			<div className={styles.experiences_wrapper}>
				<div className={styles.experience_selector} id="experience-selector">
					<div className={styles[`selected_margin--${selectedIndex}`]} />

					{experiences.map((experience, index) => (
						<button
							className={classNames(
								styles.button,
								index === selectedIndex && styles.selected
							)}
							key={experience.title}
							onClick={(e) => {
								setSelectedIndex(index);
							}}>
							{experience.company}
						</button>
					))}
				</div>
				<div id="display-experience">
					<Experience
						{...experiences[selectedIndex]}
						body={
							<div>
								{experiences[selectedIndex].body.map((item, index) => (
									<p key={index}>{item}</p>
								))}
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experiences;
