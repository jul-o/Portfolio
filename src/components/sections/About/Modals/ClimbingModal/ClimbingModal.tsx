import Modal from 'components/reusable/Modal';
import Image from 'components/reusable/Image';
import styles from '../Modals.module.scss';
import text from 'data_frontend/climbing.json';
import image from 'styles/assets/climbing.jpg';

interface Props {
	onClose: () => void;
}

const ClimbingModal = ({ onClose }: Props) => {
	return (
		<Modal
			className={styles.root}
			onClose={onClose}
			header="L'escalade et l'alpinisme">
			<div className={styles.modal_body}>
				<span className={styles.modal_image}>
					<Image
						src={image}
						alt="Course d'arêtes dans la Vanoise"
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

export default ClimbingModal;
