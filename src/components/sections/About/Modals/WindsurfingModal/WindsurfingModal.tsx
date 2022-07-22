import Modal from 'components/reusable/Modal';
import Image from 'components/reusable/Image';
import styles from '../Modals.module.scss';
import text from 'data_frontend/windsurfing.json';
import image from 'styles/assets/windsurfing.jpg';

interface Props {
	onClose: () => void;
}

const WindsurfingModal = ({ onClose }: Props) => {
	return (
		<Modal
			className={styles.root}
			onClose={onClose}
			header="La planche à voile">
			<div className={styles.modal_body}>
				<span className={styles.modal_image}>
					<Image
						src={image}
						alt="Planche à voile à Mèze avec l'UWIND"
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

export default WindsurfingModal;
