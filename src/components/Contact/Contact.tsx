import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import styles from './Contact.module.scss';
import Links from './Links';

const Contact = () => {
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

	return (
		<div id="contact" className={styles.root}>
			<h1>Envie de discuter ?</h1>
			<div className={styles.contacts}>
				<div id="email" className={styles.contact}>
					<a href="mailto:jules.sang@grenoble-inp.org">
						<button className={styles.button}>
							jules.sang@grenoble-inp.org
						</button>
					</a>
					<button
						className={styles.copy}
						onClick={() => {
							navigator.clipboard.writeText('jules.sang@grenoble-inp.org');
							updateTooltipState(setCopiedEmail);
						}}>
						<FaRegCopy />
					</button>
				</div>
				<div id="phone" className={styles.contact}>
					<a href="tel:+33 6 51 77 14 97">
						<button className={styles.button}>06 51 77 14 97</button>
					</a>
					<button
						className={styles.copy}
						onClick={() => {
							navigator.clipboard.writeText('+33 6 51 77 14 97');
							updateTooltipState(setCopiedPhone);
						}}>
						<FaRegCopy />
					</button>
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
			<Links className={styles.links} />
		</div>
	);
};

export default Contact;
