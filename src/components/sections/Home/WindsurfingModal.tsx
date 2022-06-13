import Modal from 'components/elements/Modal';

interface Props {
	onClose: () => void;
}

const WindsurfingModal = ({ onClose }: Props) => {
	return (
		<Modal onClose={onClose} header={<h1>La planche à voile</h1>}>
			<div>
				<p>UWU la planche à voile</p>
			</div>
		</Modal>
	);
};

export default WindsurfingModal;
