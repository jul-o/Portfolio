import Image from 'next/image';
import { useState } from 'react';
import styles from './Portrait.module.scss';
import myPic from 'styles/assets/me.png';
import classNames from 'utils/classNames';
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/react';

const Portrait = () => {
	const [hover, setHover] = useState(false);
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	return (
		<figure
			tabIndex={0}
			className={classNames(styles.imageWrapper, hover && styles.hover)}>
			<div className={styles.imageBorder} />
			{/* {!isImageLoaded && <BounceLoader color="#e07a00" />} */}
			{!isImageLoaded && <BounceLoader color="#e07a00" />}

			<Image
				src={myPic}
				width={256}
				height={256}
				className={styles.image}
				onLoadingComplete={() => setIsImageLoaded(true)}
				placeholder="empty"
			/>
		</figure>
	);
};

export default Portrait;
