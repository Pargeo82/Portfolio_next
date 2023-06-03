import styles from "./footer.module.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className={[styles.foot, "container"].join(" ")}>
      <p>&copy; {currentYear} Pargeo</p>
    </div>
  );
}
