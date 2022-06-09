import styles from '../styles/Contact.module.scss';
import { Button } from 'react-bulma-components';

const Contact = () => {
	return (
		<div id="contact" className={styles.root}>
			<h1 className="title is-1">Pour me contacter :</h1>
			<div id="email">
				<Button className={styles.button}>jules.sang@grenoble-inp.org</Button>
			</div>
			<div id="phone" className="is-justify-content-center is-flex">
				<Button className={styles.button}>06 51 77 14 97</Button>
			</div>
		</div>
	);
};

export default Contact;
