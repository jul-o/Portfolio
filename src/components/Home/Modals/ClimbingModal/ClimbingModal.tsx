import Modal from 'components/Modal';

interface Props {
	onClose: () => void;
}

const ClibingModal = ({ onClose }: Props) => {
	return (
		<Modal onClose={onClose} header={<h1>L'escalade</h1>}>
			<div>
				<p>UWU la grimpe</p>
			</div>
		</Modal>
	);
};

export default ClibingModal;
