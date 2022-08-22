import EmailButton from "../email_button";
import DownloadButton from "../download_button";
import Image from "next/image";
import TypewriterEff from "./typewriter";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className="left">
        <h1 className="h1-title">
          Hi, I'm <span id="Mislav">Mislav Markušić</span>
        </h1>
        <h2 className="h2-title">
          also known as <span id="Parg">Pargeo</span>
        </h2>
        <TypewriterEff />
        <div id="follow">
          <p>Find me on</p>
          <a href="https://www.linkedin.com/in/mislav-markusic/" target="_blank" rel="noreferrer">
            <Image
              className="icon"
              src="/icons8-linkedin.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
          </a>

          <a href="https://twitter.com/MislavMarkusic" target="_blank" rel="noreferrer">
            <Image src="/icons8-twitter.svg" alt="twitter" width={30} height={30} />
          </a>
          <a href="https://github.com/Pargeo82" target="_blank" rel="noreferrer">
            <Image src="/icons8-github.svg" alt="github" width={30} height={30} />
          </a>
        </div>
        <div className={[styles.buttons, "flex"].join(" ")}>
          <EmailButton />
          <DownloadButton />
        </div>
      </div>
      <div className="right">
        <Image src="/Pargeo.jpg" alt="me" width={375} height={518} />
      </div>
    </>
  );
}
