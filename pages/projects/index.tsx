import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navigation/Navbar";
import Projects from "../../components/Projects/Projects";
import projectData from "../../components/Projects/project_data";
import styles from "../../components/Projects/projects.module.css";
import Image from "next/image";

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
        linkType={project.linkType}
      />
    );
  });
  return (
    <div className="content">
      <Navbar />
      <div className="container">
        <h1 className={`h1-title ${styles.main}`}>Projects</h1>
        <div className="flex">{projectElements}</div>
        <div className={`${styles.card} flex`}>
          <a
            href="https://pargeo.hashnode.dev/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ul className={styles.ul}>
              <Image
                className={styles.projectImage}
                src="/Blog.jpg"
                alt="Blog"
                width={300}
                height={150}
              />
              <li className={`${styles.title} main-color`}>Blog</li>
              <li>
                Blogging about my coding journey and roadblocks I encounter
              </li>
              <li className={styles.links}>
                <a
                  href="https://pargeo.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Link
                </a>
              </li>
            </ul>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
