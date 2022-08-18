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
            <li className={styles.title}>Efficiency</li>
            <li>something about</li>
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
            <li className={styles.title}>Goal oriented</li>
            <li>something about</li>
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
            <li className={styles.title}>Problem solving</li>
            <li>something about</li>
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
            <li className={styles.title}>Teamwork</li>
            <li>something about</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
