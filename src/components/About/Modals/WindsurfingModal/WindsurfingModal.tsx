import Modal from 'components/Modal';
import styles from '../Modals.module.scss';
import Image from 'components/Image';
import text from 'data_frontend/windsurfing.json';

interface Props {
	onClose: () => void;
}

const WindsurfingModal = ({ onClose }: Props) => {
	return (
		<Modal onClose={onClose} header="L'escalade">
			<div className={styles.modal_body}>
				<span className={styles.modal_image}>
					<Image width={1142} height={1142} src="/files/windsurfing.jpg" />
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
