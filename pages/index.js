import Navigation from "../components/Navigation/navigation";
import Home from "../components/Home/home";
import Skills from "../components/Home/skills";
import GitHubCalendar from "react-github-calendar";
import Footer from "../components/Footer/Footer";
import TechnoUse from "../components/Home/TechnoUse";
import TechnoUseData from "../components/Home/TechnoUse_data";

export default function Homepage() {
  const technoElement = TechnoUseData.map((technology, index) => {
    return <TechnoUse key={index} image={technology.image} name={technology.name} />;
  });
  return (
    <div className="content">
      <Navigation />
      <div className="container">
        <Home />
        <Skills />
        <h1 className="h1-title center">Technologies</h1>
        <div className="flex">{technoElement}</div>
        <div className="margin-top flex">
          <GitHubCalendar username="pargeo82" weekStart={1} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
