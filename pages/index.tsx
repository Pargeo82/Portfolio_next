import Navbar from "../components/Navigation/Navbar";
import Home from "../components/Home/Home";
import Skills from "../components/Home/Skills";
import GitHubCalendar from "react-github-calendar";
import Footer from "../components/Footer/Footer";
import TechnoUse from "../components/Home/TechnoUse";
import TechnoUseData from "../components/Home/TechnoUse_data";
import styles from "../components/Home/home.module.css";
import Work from "../components/Home/Work";

export default function Homepage() {
  const technoElement = TechnoUseData.map((technology, index) => {
    return (
      <TechnoUse key={index} image={technology.name} name={technology.name} />
    );
  });
  return (
    <div className="content">
      <Navbar />
      <div className="container" style={{ marginTop: 90 }}>
        <Home />
        <Skills />
        <h2 className="h1-title center">Technologies</h2>
        <div className="flex">{technoElement}</div>
        <Work />
        <div className={`margin-top flex ${styles.git}`}>
          {/* <GitHubCalendar username="pargeo82" weekStart={1} /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
{
  /* <div className="margin-top flex"></div> */
}
