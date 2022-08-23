import styles from "./TechnoUse.module.css";
import Image from "next/image";

export default function TechnoUse(props) {
  return (
    <>
      <div className="flex">
        <Image src={`/${props.name}.png`} alt="{props.name}" width={60} height={40} />
        <h3>{props.name}</h3>
      </div>
    </>
  );
}
