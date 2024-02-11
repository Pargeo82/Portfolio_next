import Skills from '../components/Home/Skills';
import Work from '../components/Home/Work';
import Hero from '../components/Home/Hero';
import TechnologiesUsed from '../components/Home/TechnologiesUsed';
import Head from 'next/head';
import DualGitHubCalendars from '../components/Home/DualGitHubCalendars';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Pargeo portfolio</title>
        <meta
          name='description'
          content='Portfolio page for a junior frontend developer Mislav Markušić. Technologies used: HTML, CSS, JS, TS, React, NextJS, MongoDB'
        />
      </Head>
      <Hero />
      <TechnologiesUsed />
      <Skills />
      <Work />
      <DualGitHubCalendars />
    </>
  );
}
