import { useState } from 'react';
import styles from './Hobbies.module.scss';
import { GiMountainClimbing } from 'react-icons/gi';
import { RiSailboatLine } from 'react-icons/ri';
import { MdOutlineParagliding } from 'react-icons/md';
import classNames from 'utils/classNames';

interface Props {
	className?: string;
	openParagliding: () => void;
	openClimbing: () => void;
	openWindsurfing: () => void;
}

const Hobbies = ({
	className,
	openParagliding,
	openClimbing,
	openWindsurfing,
}: Props) => {
	return (
		<div className={classNames(styles.hobbies, className)}>
			<h2 className={styles.hobbies_title}>Mes passions</h2>
			<div className={styles.buttons}>
				<button onClick={openParagliding} className={styles.buttonParagliding}>
					<MdOutlineParagliding />
				</button>
				<button onClick={openClimbing}>
					<GiMountainClimbing />
				</button>
				<button onClick={openWindsurfing}>
					<RiSailboatLine />
				</button>
			</div>
		</div>
	);
};

export default Hobbies;
