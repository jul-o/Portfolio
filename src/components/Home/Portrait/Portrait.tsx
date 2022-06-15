import Image from 'next/image';
import { useState } from 'react';
import styles from './Portrait.module.scss';
import myPic from 'styles/assets/me.png';
import classNames from 'utils/classNames';

const Portrait = () => {
	const [hover, setHover] = useState(false);

	return (
		<figure
			tabIndex={0}
			className={classNames(styles.imageWrapper, hover && styles.hover)}>
			<div className={styles.imageBorder} />
			<Image src={myPic} width={256} height={256} className={styles.image} />
		</figure>
	);
};

export default Portrait;
