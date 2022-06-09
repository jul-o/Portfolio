// styles import
import styles from '../styles/Home.module.scss';
import { Columns } from 'react-bulma-components';
import Image from 'next/image';
import myPic from '../styles/assets/me.png';
import { useState } from 'react';

const Home = () => {
	return (
		<div id="home">
			<Columns>
				<Columns.Column className={styles.column}>
					<div className={styles.title}>
						<h1 id={styles.iam} className="title is-6 mb-0">
							Bonjour, moi c'est
						</h1>
						<h1 id={styles.name} className="title is-1">
							Jules Sang
						</h1>
						<h1 id={styles.job} className="title is-2">
							Développeur frontend
						</h1>
					</div>
					<div className={styles.text}>
						<p>
							Je suis un développeur frontend vivant à Grenoble. Je suis
							sans-cesse impressionné par l'évolution des technologies web, et
							j'adore passer du temps à apprendre de nouvelles choses.
						</p>
						<p>
							J'ai un fort attrait pour la résolution de problèmes, avec un soin
							particulier pour le détail. J'ai un bon relationnel et j'aime
							travailler en équipe. A côté de mon métier, je suis un grand
							amateur d'activités d'extérieur, en particulier le parapente,
							l'escalade et le ski.
						</p>
						<p>
							Je suis intéressé par le développement frontend dans son ensemble,
							et j'ai la volonté de travailler sur des projets ambitieux, avec
							des équipes volontaires et positives.
						</p>
					</div>
				</Columns.Column>
				<Columns.Column className={styles.column}>
					<Portrait />
				</Columns.Column>
			</Columns>
		</div>
	);
};

const Portrait = () => {
	const [hover, setHover] = useState(false);

	return (
		<figure
			className={`image is-256x256 ${styles.imageWrapper} ${
				hover && styles.hover
			}`}
			onMouseEnter={() => {
				setHover(true);
			}}
			onMouseLeave={() => {
				setHover(false);
			}}>
			<div className={`${styles.imageBorder} is-256x256`} />
			<Image src={myPic} width={256} height={256} className={styles.image} />
		</figure>
	);
};

export default Home;
