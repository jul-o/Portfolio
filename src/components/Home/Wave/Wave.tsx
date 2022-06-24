import classNames from 'utils/classNames';
import styles from './Wave.module.scss';

const Wave = () => {
	const onAnimationEndWave = (e) => {
		(e.target as HTMLDivElement).classList.remove(styles.animated);
	};

	const onMouseEnterWave = (e) => {
		(e.currentTarget as HTMLDivElement).classList.add(styles.animated);
	};

	return (
		<div
			className={classNames(styles.wave, styles.animated)}
			onAnimationEnd={onAnimationEndWave}
			onMouseEnter={onMouseEnterWave}
			onTouchStart={onMouseEnterWave}>
			<img src="/icons/wave.svg" width="48" height="48" />
		</div>
	);
};

export default Wave;
