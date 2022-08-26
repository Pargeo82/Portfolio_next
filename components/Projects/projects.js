import Image from "next/image";
import styles from "./projects.module.css";

export default function Projects(props) {
  const isLink = props.link;
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
        <li className={[styles.title, "main-color"].join(" ")}>{props.name}</li>
        <li>
          <div className={styles.techno}>
            {props.technology.map((techno, index) => {
              return (
                <div className={styles.techno} key={index}>
                  <Image src={`/${techno}.png`} alt={`${techno}`} width={25} height={25} />
                </div>
              );
            })}
          </div>
        </li>
        <li>{props.description}</li>
        <li className={styles.links}>
          {isLink && (
            <a href={isLink} target="_blank" rel="noreferrer">
              Link
            </a>
          )}
        </li>
      </ul>
    </div>
  );
}
