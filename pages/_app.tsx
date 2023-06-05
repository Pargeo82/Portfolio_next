import { ComponentType } from "react";
import "../styles/globals.css";
import "../styles/design_tokens.css";
import "../styles/utilities.css";
import Head from "next/head";

type AppProps = {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pargeo portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio page for a junior developer Mislav Markušić. Technologies used: HTML, CSS, JS, React, NextJS, MongoDB etc. "
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
