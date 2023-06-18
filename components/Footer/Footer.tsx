import styles from './footer.module.css';
import Image from 'next/image';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className={[styles.foot, 'container'].join(' ')}>
      <p>&copy; {currentYear} Pargeo</p>
      <div>
        <p>Find me on</p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/mislav-markusic/" target="_blank" rel="noreferrer" title="linkedin link">
          <Image className="icon" src="/icons8-linkedin.svg" alt="linkedin" width={40} height={40} />
        </a>

        <a href="https://twitter.com/MislavMarkusic" target="_blank" rel="noreferrer" title="twitter link">
          <Image src="/icons8-twitter.svg" alt="twitter" width={40} height={40} />
        </a>
        <a href="https://github.com/Pargeo82" target="_blank" rel="noreferrer" title="github link">
          <Image src="/icons8-github.svg" alt="github" width={40} height={40} />
        </a>
      </div>
    </div>
  );
}
