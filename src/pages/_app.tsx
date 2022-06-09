import 'bulma/css/bulma.min.css';
// import 'bulma-prefers-dark/css/bulma-prefers-dark.min.css';
import '../styles/globals.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
