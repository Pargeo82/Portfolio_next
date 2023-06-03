import styles from "./navigation.module.css";
import Navlinks from "./Navlinks";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Navlinks />
    </nav>
  );
}
