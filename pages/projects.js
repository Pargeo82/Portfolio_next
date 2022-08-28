import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navigation/Navbar";
import Projects from "../components/Projects/projects.js";
import projectData from "../components/Projects/project_data";
import styles from "../components/Projects/projects.module.css";

export default function ProjectsPage() {
  const projectElements = projectData.map((project) => {
    return (
      <Projects
        key={project.id}
        image={project.image}
        name={project.name}
        description={project.description}
        technology={project.technology}
        link={project.link}
        linkText={project.linkText}
      />
    );
  });
  return (
    <div className="content">
      <Navbar />
      <div className="container">
        <h1 className={`h1-title ${styles.main}`}>Projects</h1>
        <div className="flex">{projectElements}</div>
      </div>
      <Footer />
    </div>
  );
}
