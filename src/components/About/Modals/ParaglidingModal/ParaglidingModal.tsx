import Image from 'components/Image';
import Modal from 'components/Modal';
import paraglidingImage from 'styles/assets/paragliding.jpg';
import styles from '../Modals.module.scss';
import text from 'data_frontend/paragliding.json';

interface Props {
	onClose: () => void;
}

const ParaglidingModal = ({ onClose }: Props) => {
	return (
		<Modal onClose={onClose} header="Le parapente">
			<div className={styles.modal_body}>
				<span className={styles.modal_image}>
					<Image width={1442} height={1072} src="/files/paragliding.jpg" />
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
