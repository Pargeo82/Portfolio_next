import Image from "next/image";
import styles from "./home.module.css";

export default function TechnoUse(props) {
  return (
    <>
      <div className={styles.mediaFlex}>
        <Image
          src={`/${props.name}.png`}
          alt="{props.name}"
          width={50}
          height={50}
          layout="fixed"
        />
        <h3>{props.name}</h3>
      </div>
    </>
  );
}
