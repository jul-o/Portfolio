import { useState } from 'react';
import styles from './Hobbies.module.scss';
import { GiMountainClimbing } from 'react-icons/gi';
import { RiSailboatLine } from 'react-icons/ri';
import { MdOutlineParagliding } from 'react-icons/md';

interface Props {
	openParagliding: () => void;
	openClimbing: () => void;
	openWindsurfing: () => void;
}

const Hobbies = ({ openParagliding, openClimbing, openWindsurfing }: Props) => {
	return (
		<div className={styles.hobbies}>
			<h2 className={styles.hobbies_title}>Mes passions</h2>
			<div className={styles.buttons}>
				<button onClick={openParagliding}>
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