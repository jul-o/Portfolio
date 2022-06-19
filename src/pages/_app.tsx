import { ThemeProvider } from 'next-themes';
import 'styles/globals.scss';
import 'styles/tags.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	console.log(
		'Bonjour ami développeur !\n' +
			'Vous vous demandez sans doute quelles technologies sont utilisées pour ce site ? Voici la tech stack :\n' +
			'\t- Next.js + Typescript\n' +
			"\t- SCSS (je préfère éviter de surcharger mes balises avec des styles inline, d'où l'absence de tailwind, bootstrap ou autre)\n" +
			'\t- Firebase Hosting et Firebase Functions\n' +
			'Vous pourrez trouver le code source ici : https://github.com/jul-o/Portfolio'
	);

	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
