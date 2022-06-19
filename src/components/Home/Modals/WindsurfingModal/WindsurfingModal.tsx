import Modal from 'components/Modal';

interface Props {
	onClose: () => void;
}

const WindsurfingModal = ({ onClose }: Props) => {
	return (
		<Modal onClose={onClose} header={<h1>La planche à voile</h1>}>
			<div>
				<p>Planche à voile</p>
			</div>
		</Modal>
	);
};

export default WindsurfingModal;
