import Image from "next/image";
import styles from "./hobbies.module.css";

type HobbiesProps = {
  name: string;
  description: string;
  image: string;
};

export default function Hobbies(props: HobbiesProps) {
  return (
    <div className={styles.card}>
      <ul className={styles.ul}>
        <Image
          className={styles.hobbiesImage}
          src={`/${props.image}`}
          alt="{props.name}"
          width={400}
          height={300}
          layout="responsive"
        />
        <li className={[styles.title, "main-color"].join(" ")}>{props.name}</li>
        <li>{props.description}</li>
      </ul>
    </div>
  );
}
