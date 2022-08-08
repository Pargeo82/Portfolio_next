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
        <li className="techno">
          {props.technology.map((techno, index) => {
            return (
              <Image key={index} src={`/${techno}.png`} alt={`${techno}`} width={25} height={25} />
            );
          })}
        </li>
        <li>{props.description}</li>
      </ul>
    </div>
  );
}
