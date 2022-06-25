import Modal from 'components/Modal';
import styles from '../Modals.module.scss';
import Image from 'components/Image';
import text from 'data_frontend/climbing.json';
import image from 'styles/assets/climbing.jpg';

interface Props {
	onClose: () => void;
}

const ClimbingModal = ({ onClose }: Props) => {
	return (
		<Modal onClose={onClose} header="L'escalade et l'alpinisme">
			<div className={styles.modal_body}>
				<span className={styles.modal_image}>
					<Image
						width={965}
						height={724}
						src={image}
						alt="Course d'arêtes dans la Vanoise"
						blur={true}
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
