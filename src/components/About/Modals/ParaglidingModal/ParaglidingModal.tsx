import { ReactEventHandler, useState } from 'react';
import Image from 'components/ImageWithSpinner';
import Modal from 'components/Modal';
import styles from '../Modals.module.scss';
import paraglidingImage from 'styles/assets/paragliding.png';
import BounceLoader from 'react-spinners/BounceLoader';
import { css } from '@emotion/react';

interface Props {
	onClose: () => void;
}

const ParaglidingModal = ({ onClose }: Props) => {
	const onLoad = () => {
		console.log('loaded');
		setIsImageLoaded(true);
	};

	console.log(paraglidingImage);
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	return (
		<Modal onClose={onClose} header={<h1>Le parapente</h1>}>
			<div className={styles.modal_body}>
				<span className={styles.modal_image}>
					<Image src={paraglidingImage} />
				</span>
				<div className={styles.text}>
					<p>
						J'ai commencé à pratiquer le parapente au printemps 2018, et j'ai
						été immédiatement conquis. Voler avec du matériel qui tient dans un
						sac à dos, le rêve !
					</p>
					<p>
						Ce sport me plaît sur plusieurs plans : sensation de liberté,
						responsabilisation de soi, adrénaline parfois, découverte de
						paysages somptueux souvent.
					</p>
					<p>
						La marge de progression est virtuellement infinie, et la communauté
						très conviviale, ce qui fait que l'on ne s'ennuye jamais !
					</p>
				</div>
			</div>
		</Modal>
	);
};

export default ParaglidingModal;
