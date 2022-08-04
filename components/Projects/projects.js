import Image from "next/image";
import styles from "./projects.module.css";

export default function Projects(props) {
  return (
    <div className={styles.card}>
      <ul className={styles.ul}>
        <Image
          className="project-image"
          src={`/${props.image}`}
          alt="{props.name}"
          width={600}
          height={300}
        />
        <li>{props.name}</li>
        <li>{props.description}</li>
        <li>{props.technology.join(" ")}</li>
      </ul>
    </div>
  );
}
