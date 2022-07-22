import Image from 'components/reusable/Image';
import Modal from 'components/reusable/Modal';
import styles from '../Modals.module.scss';
import text from 'data_frontend/paragliding.json';
import image from 'styles/assets/paragliding.jpg';

interface Props {
	onClose: () => void;
}

const ParaglidingModal = ({ onClose }: Props) => {
	return (
		<Modal className={styles.root} onClose={onClose} header="Le parapente">
			<div className={styles.modal_body}>
				<span className={styles.modal_image}>
					<Image
						src={image}
						alt="Parapente au-dessus de La Blanche (massif des Écrins)"
						placeholder="blur"
					/>
				</span>
				<div className={styles.text}>
					{text.map((p) => (
						<p key={p}>{p}</p>
					))}
				</div>
			</div>
		</Modal>
	);
};

export default ParaglidingModal;
