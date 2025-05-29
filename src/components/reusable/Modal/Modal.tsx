import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'utils/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  onClose: () => void;
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Modal = ({
  onClose,
  header,
  children,
  footer,
  style,
  className,
}: Props) => {
  useEffect(() => {
    // const html = document.getElementsByTagName('html');
    const html = document.querySelector('html');

    const previousOverflowY = html.style.overflowY;
    html.style.overflowY = 'hidden';

    return () => {
      html.style.overflowY = previousOverflowY;
    };
  }, []);

  const rootAnimation = {
    transform: ['scale(0, 0.01)', 'scale(1, 0.01)', 'scale(1, 1)'],
  };
  const rootDuration = 0.2;

  const modalAnimation = {
    opacity: ['0', '1'],
    scale: ['0.8', '1'],
  };
  const modalDuration = 0.2;

  return createPortal(
    <AnimatePresence>
      <motion.div
        animate={rootAnimation}
        transition={{ duration: rootDuration }}
        className={classNames(className, styles.root)}
        onClick={onClose}
        style={style}>
        <motion.div
          animate={modalAnimation}
          transition={{ duration: modalDuration, delay: rootDuration }}
          className={styles.modal}
          onClick={(e) => {
            // prevent root's onClick from closing the modal
            e.stopPropagation();
          }}>
          {header && (
            <div className={styles.header}>
              <h1>{header}</h1>
              <button className={styles.button_close} onClick={onClose}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          )}
          <div className={styles.body}>{children}</div>
          {footer && <div className={styles.footer}>{footer}</div>}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
