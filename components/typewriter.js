import styles from "./typewriter.module.css";
import Typewriter from "typewriter-effect";

export default function TypewriterEff() {
  return (
    <div>
      <h2 className="h2-title">
        <Typewriter
          options={{
            strings: ["web developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </div>
  );
}
