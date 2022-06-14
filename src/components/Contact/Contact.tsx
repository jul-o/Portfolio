import { useState } from 'react';
import { Button } from 'react-bulma-components';
import { FaRegCopy } from 'react-icons/fa';
import styles from './Contact.module.scss';

const Contact = () => {
	const [copiedEmail, setCopiedEmail] = useState(false);
	const [copiedPhone, setCopiedPhone] = useState(false);

	const updateTooltipState = (setter: Function) => {
		setCopiedEmail(false);
		setCopiedPhone(false);
		setter(true);
		setTimeout(() => {
			setter(false);
		}, 2000);
	};

	return (
		<div id="contact" className={styles.root}>
			<h1>Pour me contacter :</h1>
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
		</div>
	);
};

export default Contact;