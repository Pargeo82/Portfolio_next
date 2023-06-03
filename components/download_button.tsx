import styles from "./download_button.module.css";
import Image from "next/image";
// "./Resume_Mislav_Markusic.pdf download";
export default function DownloadButton() {
  return (
    <a
      className={styles.button}
      href="./Mislav_Markusic_CV.pdf"
      download
      target="_blank"
      rel="noreferrer"
      title="download Resume"
    >
      <Image src="/download-svgrepo-com.svg" alt="email" width={30} height={30} />
      <span className={styles.resume}>Resume</span>
    </a>
  );
}
