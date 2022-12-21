import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navigation/Navbar";
import styles from "../../components/Projects/projects.module.css";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="content">
      <Navbar />
      <div className={`container ${styles.projectContainer}`}>
        <h1>Portfolio site</h1>
        <div className="flex">
          <div className={styles.imageHolder}>
            <Image
              src="/Portfolio.jpg"
              alt="image 1"
              width={960}
              height={483}
              layout="responsive"
            />
          </div>
          <div className={styles.imageHolder}>
            <Image
              src="/portfolio2.png"
              alt="image 2"
              width={960}
              height={483}
              layout="responsive"
            />
          </div>
        </div>
        <div>
          <h2>Technologies used:</h2>
          <div className="flex-start">
            <div className={styles.techno}>
              <Image src="/NextJS.png" alt="NextJS" width={50} height={50} />
            </div>
            <div className={styles.techno}>
              <Image src="/CSS.png" alt="CSS" width={50} height={50} />
            </div>
          </div>
        </div>
        <h2>Description:</h2>
        <p className={styles.description}>
          This is a project that had many iterations. I started it in vanilla
          JS, but as the time passed by it got remade and remade. This is the
          look I&apos;m currently most satisfied with, not too complex, but
          clean. NextJS got picked because it has great SEO from the box. I have
          also spent significant amount of time on making google crawler work on
          it, did a lot of accessibility tests and speed tests, so it would get
          as optimized as possible.
        </p>
        <h2>Links:</h2>
        <div>
          <a
            href="https://github.com/Pargeo82/Portfolio_next"
            target="_blank"
            rel="noreferrer"
            title="github link"
          >
            <Image
              src="/icons8-github.svg"
              alt="github"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
