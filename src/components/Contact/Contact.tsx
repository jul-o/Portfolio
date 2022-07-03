import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './Contact.module.scss';
import Links from './Links';
import { rootVariants, childrenVariants } from 'utils/slideInVariants';
import useViewportObserver from 'utils/hooks/useViewportObserver';
import React from 'react';
import classNames from 'utils/classNames';

const Contact = ({ className }) => {
	const updateTooltipState = (setter: Function) => {
		setCopiedEmail(false);
		setCopiedPhone(false);
		setter(true);
		setTimeout(() => {
			setter(false);
		}, 2000);
	};

	const [copiedEmail, setCopiedEmail] = useState(false);
	const [copiedPhone, setCopiedPhone] = useState(false);

	const [isInViewport, setIsInViewport] = useState(false);
	const rootRef = React.createRef<HTMLDivElement>();
	useViewportObserver(setIsInViewport, rootRef);

	return (
		<div
			id="contact"
			className={classNames(className, styles.root)}
			ref={rootRef}>
			<motion.div
				variants={rootVariants}
				animate={isInViewport ? 'inViewport' : 'notInViewport'}
				initial={'notInViewport'}>
				<motion.h1 variants={childrenVariants}>Envie de discuter ?</motion.h1>
				<div className={styles.contacts}>
					<div id="email" className={styles.contact}>
						<a href="mailto:jules.sang@grenoble-inp.org">
							<motion.button
								variants={childrenVariants}
								className={styles.button}>
								jules.sang@grenoble-inp.org
							</motion.button>
						</a>
						<motion.button
							variants={childrenVariants}
							className={styles.copy}
							onClick={() => {
								navigator.clipboard.writeText('jules.sang@grenoble-inp.org');
								updateTooltipState(setCopiedEmail);
							}}>
							<FaRegCopy />
						</motion.button>
					</div>
					<div id="phone" className={styles.contact}>
						<a href="tel:+33 6 51 77 14 97">
							<motion.button
								variants={childrenVariants}
								className={styles.button}>
								06 51 77 14 97
							</motion.button>
						</a>
						<motion.button
							variants={childrenVariants}
							className={styles.copy}
							onClick={() => {
								navigator.clipboard.writeText('+33 6 51 77 14 97');
								updateTooltipState(setCopiedPhone);
							}}>
							<FaRegCopy />
						</motion.button>
					</div>
				</div>
				{copiedEmail && (
					<span className={styles.copiedAlert}>
						Email copié dans le presse-papier !
					</span>
				)}
				{copiedPhone && (
					<span className={styles.copiedAlert}>
						Numéro de téléphone copié dans le presse-papier !
					</span>
				)}
			</motion.div>
			{/* TODO: separate from contacts */}
			<Links className={styles.links} />
		</div>
	);
};

export default Contact;
