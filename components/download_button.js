import styles from "./download_button.module.css";
import Image from "next/image";

export default function DownloadButton() {
  return (
    <a href="./Resume_Mislav_Markusic.pdf" download>
      <button className={styles.button}>
        <Image src="/download-svgrepo-com.svg" alt="email" width={30} height={30} />
        <span className={styles.resume}>Resume</span>
      </button>
    </a>
  );
}
