import Experience from './Experience';

const Experiences = () => {
	return (
		<div id="experiences">
			<h1 className="title is-1">Mes expériences de développeur</h1>
			{/* TODO: fetch data for experiences from a file */}
			<Experience
				title="Développeur logiciel en alternance"
				dates="01/2019 - 09/2021"
				technologies={[
					{ name: 'Python', percentage: 90, color: 'python' },
					{ name: 'Java EE', percentage: 80, color: 'jee' },
					{ name: 'MySQL', percentage: 45, color: 'mysql' },
				]}
				tldr={[
					"Conception et développement d'une suite d'outils d'analyse de tests hydrauliques",
					"Migration de l'ensemble de la base de code de l'équipe de SVN ver Git",
				]}
				body={
					<div>
						<p>
							Dans le cadre de la conception de turbines hydroélectriques, j'ai
							rejoint une équipe d'une dizaine développeurs, avec pour mission
							la conception et le développement d'une suite d'outils d'analyse
							des résultats de tests effectués sur des modèles à échelle réduite
							de turbines.
						</p>
						<p>
							Ces outils sont développés en Python avec en backend un
							environnement Java EE/MySQL.
						</p>
						<p className="mb-5">
							Nous avions régulièrement des réunions avec les ingénieurs
							hydrauliciens, afin de concevoir et corriger les fonctionnalités
							de la suite d'outils.
						</p>
						<p>
							J'ai également eu pour mission de planifier et mettre en œuvre la
							migration de l'ensemble de la base de code de l'équipe de SVN vers
							Git, avec maintien de l'historique de modifications
						</p>
					</div>
				}
			/>
		</div>
	);
};

export default Experiences;
