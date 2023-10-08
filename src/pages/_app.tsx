import Head from "next/head";
import { ThemeProvider } from "next-themes";
import "styles/globals.scss";
import "styles/tags.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(
    "Bonjour ami développeur !\n" +
      "Vous vous demandez sans doute quelles technologies sont utilisées pour ce site ? Voici la stack :\n" +
      "\t- Next.js + Typescript\n" +
      "\t- SCSS (J'ai décidé de ne pas surcharger mes balises avec des styles inline, d'où l'absence de Tailwind, Emotion ou autre)\n" +
      "\t- Framer Motion\n" +
      "\t- Firebase Hosting et Firebase Functions\n" +
      "Vous pourrez trouver le code source ici : https://github.com/jul-o/Portfolio"
  );

  return (
    <>
      <Head>
        <title>Jules Sang</title>
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
