import Image from "next/image";
import styles from "./projects.module.css";

export default function Projects(props) {
  return (
    <div className={styles.card}>
      <ul className={styles.ul}>
        <Image
          className={styles.projectImage}
          src={`/${props.image}`}
          alt="{props.name}"
          width={300}
          height={150}
        />
        <li className={styles.title}>{props.name}</li>
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
