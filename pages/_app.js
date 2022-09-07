import "../styles/globals.css";
import "../styles/design_tokens.css";
import "../styles/utilities.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pargeo portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio page for a junior developer Mislav Markušić. Technologies used: HTML, CSS, JS, React, NextJS, MongoDB etc. "
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
