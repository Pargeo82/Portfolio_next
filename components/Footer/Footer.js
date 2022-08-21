import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={[styles.foot, "container"].join(" ")}>
      <p>&copy; 2022 Pargeo</p>
    </div>
  );
}
