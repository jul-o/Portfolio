import Image from 'components/reusable/Image';
import myPic from 'styles/assets/me.png';
import classNames from 'utils/classNames';
import styles from './Portrait.module.scss';

interface Props {
	className?: string;
}

const Portrait = ({ className }: Props) => {
	return (
		<figure tabIndex={0} className={classNames(className, styles.imageWrapper)}>
			<div className={styles.imageBorder} />
			<Image
				src={myPic}
				alt="Photo de moi, beau gosse, chauve, en hoodie et avec des lunettes"
				className={styles.image}
				rootClassName={styles.imageRoot}
				width={256}
				height={256}
				placeholder="empty"
			/>
		</figure>
	);
};

export default Portrait;
