import Image from 'components/ImageWithSpinner';
import { useState } from 'react';
import styles from './Portrait.module.scss';
import classNames from 'utils/classNames';
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/react';
import myPic from 'styles/assets/me.png';

const Portrait = () => {
	const [hover, setHover] = useState(false);
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	return (
		<figure
			tabIndex={0}
			className={classNames(styles.imageWrapper, hover && styles.hover)}>
			<div className={styles.imageBorder} />
			<Image src={myPic} className={styles.image} />
		</figure>
	);
};

export default Portrait;
