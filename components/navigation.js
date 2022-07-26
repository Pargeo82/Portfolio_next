import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.links}>
        <Link href="/">Home</Link>
      </h2>
      <h2 className={styles.links}>
        <Link href="/projects">Projects</Link>
      </h2>
      <h2 className={styles.links}>
        <Link href="/hobbies">Hobbies</Link>
      </h2>
      <h2 className={styles.links}>
        <Link href="/contact">Contact</Link>
      </h2>
    </nav>
  );
}
