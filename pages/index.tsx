//import GitHubCalendar from "react-github-calendar";
import Router from 'next/router';
import Skills from '../components/Home/Skills';
import TechnoUse from '../components/Home/TechnoUse';
import TechnoUseData from '../components/Home/TechnoUse_data';
import Work from '../components/Home/Work';
import { Box, Stack, Typography, Grid, Button, useTheme } from '@mui/material';
import TypewriterEff from '../components/Home/Typewriter';
import Image from 'next/image';
import Hero from '../components/Home/Hero';

export default function Homepage() {
  const theme = useTheme();
  const technoElement = TechnoUseData.map((technology, index) => {
    return <TechnoUse key={index} image={technology.name} name={technology.name} />;
  });
  return (
    <>
      <Hero />
    </>
    // <div className="content">
    //   <div className="container" style={{ marginTop: 90 }}>
    //     <Home />
    //     <Skills />
    //     <h2 className="h1-title center">Technologies</h2>
    //     <div className="flex">{technoElement}</div>
    //     <Work />
    //     <div className={`margin-top flex ${styles.git}`}>
    //       {/* <GitHubCalendar username="pargeo82" weekStart={1} /> */}
    //     </div>
    //   </div>
    // </div>
  );
}
{
  /* <div className="margin-top flex"></div> */
}
