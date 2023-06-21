import Link from 'next/link';
import styles from './navigation.module.css';
import { useRouter } from 'next/router';

export default function Navlinks() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.menu}>
      <h2 className={styles.links}>
        <Link href="/">
          <a className={currentRoute === '/' ? `${styles.active}` : `${styles.nonActive}`}>Home</a>
        </Link>
      </h2>
      <h2 className={styles.links}>
        <Link href="/projects">
          <a className={currentRoute === '/projects' ? `${styles.active}` : `${styles.nonActive}`}>Projects</a>
        </Link>
      </h2>
      <h2 className={styles.links}>
        <Link href="/hobbies">
          <a className={currentRoute === '/hobbies' ? `${styles.active}` : `${styles.nonActive}`}>Hobbies</a>
        </Link>
      </h2>
    </div>
  );
}
