import Modal from 'components/Modal';
import styles from '../Modals.module.scss';
import Image from 'components/Image';
import text from 'data_frontend/windsurfing.json';
import image from 'styles/assets/windsurfing.jpg';

interface Props {
	onClose: () => void;
}

const WindsurfingModal = ({ onClose }: Props) => {
	return (
		<Modal onClose={onClose} header="La planche à voile">
			<div className={styles.modal_body}>
				<span className={styles.modal_image}>
					<Image
						width={1142}
						height={1142}
						src={image}
						alt="Planche à voile à Mèze avec l'EVUG"
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

export default WindsurfingModal;
