import Image from 'components/Image';
import myPic from 'styles/assets/me.png';
import classNames from 'utils/classNames';
import styles from './Portrait.module.scss';

const Portrait = () => {
	return (
		<figure tabIndex={0} className={classNames(styles.imageWrapper)}>
			<div className={styles.imageBorder} />
			<Image src={myPic} className={styles.image} />
		</figure>
	);
};

export default Portrait;
