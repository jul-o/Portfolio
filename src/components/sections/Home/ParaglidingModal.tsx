import { Modal } from 'react-bulma-components';
import styles from 'styles/modules/Home.module.scss';

interface Props {
	onClose: () => void;
}

const ParaglidingModal = ({ onClose }) => {
	return (
		<Modal show onClose={onClose}>
			<Modal.Content>PARAAAAAA</Modal.Content>
			<Modal.Card>
				<Modal.Card.Body>UWUUUUU</Modal.Card.Body>
			</Modal.Card>
		</Modal>
	);
};

export default ParaglidingModal;
