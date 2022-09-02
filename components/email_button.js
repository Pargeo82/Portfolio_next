import styles from "./email_button.module.css";
import Image from "next/image";

export default function EmailButton() {
  return (
    <button className={styles.button} onClick="mailto:pargeo82@gmail.com">
      <Image src="/email20.svg" alt="email" width={30} height={30} />
      <span className={styles.email}>Email</span>
    </button>
  );
}
