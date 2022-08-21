import Navigation from "../components/navigation/navigation";
import Home from "../components/Home/home";
import Skills from "../components/Home/skills";
import GitHubCalendar from "react-github-calendar";
import Footer from "../components/Footer/Footer";

export default function Homepage() {
  return (
    <div className="content">
      <Navigation />
      <div className="container flex">
        <Home />
        <Skills />
        <div className="margin-top">
          <GitHubCalendar username="pargeo82" weekStart={1} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
