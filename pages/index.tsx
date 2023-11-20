//import GitHubCalendar from "react-github-calendar";
import Skills from '../components/Home/Skills';
import Work from '../components/Home/Work';
import Hero from '../components/Home/Hero';
import TechnologiesUsed from '../components/Home/TechnologiesUsed';
import Head from 'next/head';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Pargeo Portfolio</title>
        <meta
          name='description'
          content='Portfolio page for a junior developer Mislav Markušić. Technologies used: HTML, CSS, JS, React, NextJS, MongoDB'
        />
      </Head>
      <Hero />
      <Skills />
      <TechnologiesUsed />
      <Work />
      {/* <GitHubCalendar username="pargeo82" weekStart={1} /> */}
    </>
  );
}
