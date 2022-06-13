import { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
	onClose: () => void;
	header?: ReactElement;
	children: ReactElement;
	footer?: ReactElement;
}

const Modal = ({ onClose, header, children, footer }: Props) => {
	return ReactDOM.createPortal(
		<div className={styles.root} onClick={onClose}>
			<div
				className={styles.modal}
				onClick={(e) => {
					// prevent root's onClick from closing the modal
					e.stopPropagation();
				}}>
				{header && (
					<div className={styles.header}>
						{header}
						<button className={styles.button_close} onClick={onClose}>
							<AiOutlineClose />
						</button>
					</div>
				)}
				<div className={styles.body}>{children}</div>
				{footer && <div className={styles.footer}>{footer}</div>}
			</div>
		</div>,
		document.body
	);
};

export default Modal;
