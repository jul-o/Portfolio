import Experience from './Experience';
import { useEffect } from 'react';
import fs from 'fs';
import experiences from '../data_frontend/experiences.json';

const Experiences = () => {
	return (
		<div id="experiences">
			<h1>Mes expériences de développeur</h1>
			{/* TODO: fetch data for experiences from a file */}
			{experiences.map((experience) => (
				<Experience
					key={experience.title}
					{...experience}
					body={
						<div>
							{experience.body.map((item, index) => (
								<p key={index}>{item}</p>
							))}
						</div>
					}
				/>
			))}
		</div>
	);
};

export default Experiences;
