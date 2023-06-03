import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";

type Props = {
  image: string;
  name: string;
  description: string;
  technology: string[];
  link: string;
  linkType: string;
};

export default function Projects(props: Props) {
  return (
    <Link href={`/projects/${props.link}`}>
      <div className={styles.card} tabIndex={1}>
        <ul className={styles.ul}>
          <Image
            className={styles.projectImage}
            src={`/${props.image}`}
            alt="{props.name}"
            width={300}
            height={150}
          />
          <li className={[styles.title, "main-color"].join(" ")}>
            {props.name}
          </li>
          <li>
            <div className={styles.techno}>
              {props.technology.map((techno, index) => {
                return (
                  <div className={styles.techno} key={index}>
                    <Image
                      src={`/${techno}.png`}
                      alt={`${techno}`}
                      width={25}
                      height={25}
                    />
                  </div>
                );
              })}
            </div>
          </li>
          <li>{props.description}</li>
        </ul>
      </div>
    </Link>
  );
}
