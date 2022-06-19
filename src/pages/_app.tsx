import { ThemeProvider } from 'next-themes';
import 'styles/globals.scss';
import 'styles/tags.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
