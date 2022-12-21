import styles from "./skills.module.css";
import Image from "next/image";

export default function Work() {
  return (
    <div className="margin-top center">
      <h2 className="h1-title">Employment</h2>
      <div className="flex">
        <div className={`${styles.workText} ${styles.workCard}`}>
          <h3>November 2022 -</h3>
          <ul>
            <li>Atomic Intelligence is a data-centric company</li>
            <li>Big data, streaming, DW/BI, Data Science, AI, Data Lakes</li>
            <li>working as a junior frontend (React) developer</li>
            <li>started November 2022</li>
          </ul>
        </div>
        <div className={styles.images}>
          <a
            href="https://atmc.ai/"
            target="_blank"
            rel="noreferrer"
            title="twitter link"
          >
            <Image
              className={styles.workCard}
              src="/atomicCopy.png"
              alt="Atomic Intelligence"
              width={400}
              height={100}
            />
          </a>
        </div>
      </div>
      <div className="flex">
        <div className={`${styles.workText} ${styles.workCard}`}>
          <h3>AI Panda project</h3>
          <ul>
            <li>B2B application</li>
            <li>AI solution for data manipulation and transformation</li>
            <li>
              detection and classification of personal and sensitive information
            </li>
          </ul>
        </div>
        <div className={styles.images}>
          <Image
            className={styles.workCard}
            src="/pandaLogo.png"
            alt="AI Panda logo"
            width={400}
            height={133}
          />
        </div>
      </div>
    </div>
  );
}
