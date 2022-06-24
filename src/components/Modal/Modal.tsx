import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
	onClose: () => void;
	header?: ReactNode;
	children: ReactNode;
	footer?: ReactNode;
	style?: React.CSSProperties;
}

const Modal = ({ onClose, header, children, footer, style }: Props) => {
	useEffect(() => {
		// const html = document.getElementsByTagName('html');
		const html = document.querySelector('html');

		const previousOverflowY = html.style.overflowY;
		html.style.overflowY = 'hidden';

		return () => {
			html.style.overflowY = previousOverflowY;
		};
	}, []);

	return ReactDOM.createPortal(
		<div className={styles.root} onClick={onClose} style={style}>
			<div
				className={styles.modal}
				onClick={(e) => {
					// prevent root's onClick from closing the modal
					e.stopPropagation();
				}}>
				{header && (
					<div className={styles.header}>
						<h1>{header}</h1>
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
