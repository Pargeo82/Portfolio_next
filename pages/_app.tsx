import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import '../src/styles/globals.css';
import Layout from '../src/components/Layout/Layout';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Poppins } from 'next/font/google';

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const poppins = Poppins({
  weight: ['200', '400', '700'],
  subsets: ['latin'],
});

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Pargeo portfolio</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          name='description'
          content='Portfolio page for a frontend developer & ux/ui designer Mislav Markušić. Technologies used: HTML, CSS, JS, React, NextJS, MongoDB etc. '
        />
        <meta
          name='twitter:card'
          content='Portfolio page for a frontend developer & ux/ui designer Mislav Markušić. Technologies used: HTML, CSS, JS, React, NextJS, MongoDB etc.'
        />
        <meta
          name='twitter:site'
          content='@pargeo'
        />
        <meta
          name='twitter:creator'
          content='@pargeo'
        />
        <meta
          property='og:url'
          content='https://www.pargeo.com.hr/'
        />
        <meta
          property='og:title'
          content='Pargeo portfolio'
        />
        <meta
          property='og:description'
          content='Portfolio page for a frontend developer & ux/ui designer Mislav Markušić. Technologies used: HTML, CSS, JS, React, NextJS, MongoDB etc.'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        ></link>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        ></link>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        ></link>
        <link
          rel='manifest'
          href='/site.webmanifest'
        ></link>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <main className={poppins.className}>
            <Component {...pageProps} />
          </main>
          <Analytics />
          <SpeedInsights />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
