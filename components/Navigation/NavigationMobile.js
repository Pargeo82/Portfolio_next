import styles from "./navigation.module.css";
import Image from "next/image";
import Navlinks from "./Navlinks";
import React from "react";

export default function NavigationMobile() {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <nav className={styles.navMobile}>
      <div className={styles.minime}>
        <Image src="/minime.jpg" alt="Small me" width={40} height={40} layout="fixed" />
      </div>
      <div className={styles.hamburger} onClick={() => setShowNav(!showNav)}>
        <Image src="/hamburger.png" alt="Menu" width={40} height={40} layout="fixed" />
      </div>
      {showNav && <Navlinks />}
    </nav>
  );
}
