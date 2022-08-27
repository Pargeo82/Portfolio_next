import Navbar from "../components/Navigation/Navbar";
import Home from "../components/Home/home";
import Skills from "../components/Home/skills";
import GitHubCalendar from "react-github-calendar";
import Footer from "../components/Footer/Footer";
import TechnoUse from "../components/Home/TechnoUse";
import TechnoUseData from "../components/Home/TechnoUse_data";
import styles from "../components/Home/home.module.css";

export default function Homepage() {
  const technoElement = TechnoUseData.map((technology, index) => {
    return <TechnoUse key={index} image={technology.image} name={technology.name} />;
  });
  return (
    <div className="content">
      <Navbar />
      <div className="container">
        <Home />
        <Skills />
        <h1 className="h1-title center">Technologies</h1>
        <div className="flex">{technoElement}</div>
        <div className={`margin-top flex ${styles.git}`}>
          <GitHubCalendar username="pargeo82" weekStart={1} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
{
  /* <div className="margin-top flex"></div> */
}
