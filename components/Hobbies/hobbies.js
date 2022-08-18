import Image from "next/image";
import styles from "./hobbies.module.css";

export default function Hobbies(props) {
  return (
    <div className={styles.card}>
      <ul className={styles.ul}>
        <Image
          className={styles.hobbiesImage}
          src={`/${props.image}`}
          alt="{props.name}"
          width={400}
          height={300}
        />
        <li className={[styles.title, "main-color"].join(" ")}>{props.name}</li>
        <li>{props.description}</li>
      </ul>
    </div>
  );
}
