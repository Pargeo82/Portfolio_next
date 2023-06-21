import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';
import styles from './navigation.module.css';

export default function Navbar() {
  return (
    <div className={styles.navBar}>
      <Navigation />
      <NavigationMobile />
    </div>
  );
}
