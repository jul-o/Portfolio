import styles from './ExperienceSelector.module.scss';
import classNames from 'utils/classNames';

interface Props {
	selectedIndex: number;
	setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
	experiences: any[];
}

function ExperienceSelector({
	selectedIndex,
	setSelectedIndex,
	experiences,
}: Props) {
	return (
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
	);
}

export default ExperienceSelector;
