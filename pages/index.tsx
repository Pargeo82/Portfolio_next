//import GitHubCalendar from "react-github-calendar";
import Skills from '../components/Home/Skills';
import Work from '../components/Home/Work';
import { useTheme } from '@mui/material';
import Hero from '../components/Home/Hero';
import TechnologiesUsed from '../components/Home/TechnologiesUsed';

export default function Homepage() {
  const theme = useTheme();

  return (
    <>
      <Hero />
      <Skills />
      <TechnologiesUsed />
      <Work />
      {/* <GitHubCalendar username="pargeo82" weekStart={1} /> */}
    </>
  );
}
