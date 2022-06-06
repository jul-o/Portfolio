// styles import
import styles from '../styles/Home.module.scss';

const Home = () => {
    return (
        <div className='section'>
            <div id={styles.contents}>
                <div id={styles.title}>
                    <h1 className='title is-6 mb-0'>Bonjour, moi c'est</h1>
                    <h1 className='title is-1'>
                        <p>Jules Sang</p>
                        <p>Développeur frontend</p>
                    </h1>
                </div>
                <div id={styles.text}>
                    <p>Je suis un développeur frontend, localisé à Grenoble.
                        Je suis passionné par le développement web, et particulièrement frontend depuis que j'ai découvert la programmation.
                        Je suis sans-cesse impressionné par l'évolution des technologies web, et j'adore passer du temps à apprendre de nouvelles choses.
                    </p>
                    <p>J'ai un fort attrait pour la résolution de problèmes, avec un soin particulier pour le détail. J'ai un bon relationnel et j'aime travailler en équipe
                        A côté de mon métier, je suis un grand amateur d'activités d'extérieur, en particulier le parapente, l'escalade et le ski.
                    </p>
                    <p>Je suis intéressé par le développement frontend dans son ensemble,
                        et j'ai la volonté de travailler sur des projets ambitieux, avec des équipes volontaires et positives.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;