import styles from "./download_button.module.css";
import Image from "next/image";

export default function DownloadButton() {
  return (
    <a href="./CV_Mislav_Markusic.doc" download>
      <button className={styles.button}>
        <Image
          src="/download-svgrepo-com.svg"
          alt="email"
          width={30}
          height={30}
        />
        <span className={styles.resume}>Resume</span>
      </button>
    </a>
  );
}
