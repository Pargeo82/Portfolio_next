import styles from "./email_button.module.css";
import Image from "next/image";

export default function EmailButton() {
  return (
    <a href="mailto:pargeo82@gmail.com">
      <button className={styles.button}>
        <Image src="/email20.svg" alt="email" width={30} height={30} />
        <span className={styles.email}>Email</span>
      </button>
    </a>
  );
}
