import Experience from 'components/Experiences/Experience';
import experiences from 'data_frontend/experiences.json';
import React, { useState } from 'react';
import classNames from 'utils/classNames';
import useViewportObserver from 'utils/hooks/useViewportObserver';
import styles from './Experiences.module.scss';
import ExperienceSelector from './ExperienceSelector';

const Experiences = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const [isInViewport, setIsInViewport] = useState(false);
	const rootRef = React.createRef<HTMLDivElement>();
	useViewportObserver(setIsInViewport, rootRef);

	return (
		<div
			id="experiences"
			className={classNames(styles.root, isInViewport && styles.in_viewport)}
			ref={rootRef}>
			<h1>Mes expériences de développeur</h1>
			<div className={styles.experiences_wrapper}>
				<ExperienceSelector
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
					experiences={experiences}
				/>
				<div id="display-experience">
					{experiences.map((experience, index) => (
						<Experience
							{...experience}
							isShown={index === selectedIndex}
							body={
								<div>
									{experience.body.map((item, index) => (
										<p key={index}>{item}</p>
									))}
								</div>
							}
							key={experience.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experiences;
