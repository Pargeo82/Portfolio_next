import Navigation from "../components/navigation";
import Home from "../components/Home/home";
import Skills from "../components/skills";

export default function Homepage() {
  return (
    <>
      <Navigation />
      <div className="container flex">
        <Home />
        <Skills />
      </div>
    </>
  );
}
