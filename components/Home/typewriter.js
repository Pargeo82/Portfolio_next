import styles from "./typewriter.module.css";
import Typewriter from "typewriter-effect";

export default function TypewriterEff() {
  return (
    <div className={styles.containerDiv}>
      <div>
        <h2 className="h2-title">I&apos;m a</h2>
      </div>
      <h2 className="h2-title main-color">
        <Typewriter
          options={{
            strings: ["full-stack developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </div>
  );
}
