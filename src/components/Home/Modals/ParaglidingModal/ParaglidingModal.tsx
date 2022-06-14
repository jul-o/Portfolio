import Image from 'next/image';
import Modal from 'components/Modal';
import styles from '../Modals.module.scss';
import paraglidingImage from 'styles/assets/paragliding.png';
import { useEffect } from 'react';

interface Props {
	onClose: () => void;
}

const ParaglidingModal = ({ onClose }: Props) => {
	useEffect(() => {
		console.log({ styles });
	});
	return (
		<Modal onClose={onClose} header={<h1>Le parapente</h1>}>
			<div className={styles.modal_body}>
				<span className={styles.modal_image}>
					<Image src={paraglidingImage} />
				</span>
				{/* TODO: fetch from file */}
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

// const ParaglidingModal = ({ onClose }) => {
// 	return (
// 		<Modal show onClose={onClose}>
// 			<Modal.Content>PARAAAAAA</Modal.Content>
// 			<Modal.Card>
// 				<Modal.Card.Body>UWUUUUU</Modal.Card.Body>
// 			</Modal.Card>
// 		</Modal>
// 	);
// };

export default ParaglidingModal;
