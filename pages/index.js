import Navigation from "../components/navigation";
import Home from "../components/Home/home";
import Skills from "../components/skills";
import GitHubCalendar from "react-github-calendar";

export default function Homepage() {
  return (
    <>
      <Navigation />
      <div className="container flex">
        <Home />
        <Skills />
        <GitHubCalendar username="pargeo82" weekStart={1} />
      </div>
    </>
  );
}
