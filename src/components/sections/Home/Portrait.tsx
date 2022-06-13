import Image from 'next/image';
import { useState } from 'react';
import styles from 'styles/modules/Home.module.scss';
import myPic from 'styles/assets/me.png';

const Portrait = () => {
	const [hover, setHover] = useState(false);

	return (
		<figure
			className={`image is-256x256 ${styles.imageWrapper} ${
				hover && styles.hover
			}`}
			onMouseEnter={() => {
				setHover(true);
			}}
			onMouseLeave={() => {
				setHover(false);
			}}>
			<div className={`${styles.imageBorder} is-256x256`} />
			<Image src={myPic} width={256} height={256} className={styles.image} />
		</figure>
	);
};

export default Portrait;
