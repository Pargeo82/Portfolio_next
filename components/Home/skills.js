import styles from "./skills.module.css";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="margin-top center">
      <h1 className="h1-title">Why hire me?</h1>
      <div className="flex">
        <div className={styles.card}>
          <ul className={styles.ul}>
            <Image
              className={styles.skillsImage}
              src="/effic.png"
              alt="efficiency"
              width={200}
              height={200}
            />
            <li className={[styles.title, "main-color"].join(" ")}>Efficiency</li>
            <li>
              I live by this. Use the least amount of time, energy and complications to reach a goal
              (not at the expense of quality though)
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <ul className={styles.ul}>
            <Image
              className={styles.skillsImage}
              src="/goals.png"
              alt="goals"
              width={200}
              height={200}
            />
            <li className={[styles.title, "main-color"].join(" ")}>Goal oriented</li>
            <li>I always try to set smaller goals in order to reach the greater one</li>
          </ul>
        </div>
        <div className={styles.card}>
          <ul className={styles.ul}>
            <Image
              className={styles.skillsImage}
              src="/problem.png"
              alt="problem solving"
              width={200}
              height={200}
            />
            <li className={[styles.title, "main-color"].join(" ")}>Problem solving</li>
            <li>When you divide bigger problems, smaller ones don't seem as big</li>
          </ul>
        </div>
        <div className={styles.card}>
          <ul className={styles.ul}>
            <Image
              className={styles.skillsImage}
              src="/teamwork.png"
              alt="teamwork"
              width={200}
              height={200}
            />
            <li className={[styles.title, "main-color"].join(" ")}>Teamwork</li>
            <li>
              You can't grow without a team, everything is better and faster, and more fun in one
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
