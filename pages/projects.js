import Navigation from "../components/navigation";
import Projects from "../components/Projects/projects";
import projectData from "../components/Projects/project_data";

export default function ProjectsPage() {
  const projectElements = projectData.map((project) => {
    return (
      <Projects
        key={project.id}
        image={project.image}
        name={project.name}
        description={project.description}
        technology={project.technology}
      />
    );
  });
  return (
    <>
      <Navigation />
      <div className="container">
        <h1 className="h1-title">Projects</h1>
        <div className="flex">{projectElements}</div>
      </div>
    </>
  );
}
