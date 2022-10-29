import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navigation/Navbar";
import styles from "../../components/Projects/projects.module.css";
import Image from "next/image";

export default function Cedeterija() {
  return (
    <div className="content">
      <Navbar />
      <div className={`container ${styles.projectContainer}`}>
        <h1>Discogs album fetcher</h1>
        <div className="flex">
          <div className={styles.imageHolder}>
            <Image
              src="/cedeterija3.png"
              alt="image 1"
              width={768}
              height={400}
              layout="responsive"
            />
          </div>
          <div className={styles.imageHolder}>
            <Image
              src="/cedeterija2.png"
              alt="image 2"
              width={768}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
        <div>
          <h2>Technologies used:</h2>
          <div className="flex-start">
            <div className={styles.techno}>
              <Image src="/NextJS.png" alt="/NextJS" width={50} height={50} />
            </div>
            <div className={styles.techno}>
              <Image src="/CSS.png" alt="/CSS" width={50} height={50} />
            </div>
          </div>
        </div>
        <h2>Description:</h2>
        <p className={styles.description}>
          At previous job a problem I wanted to resolve was when receiving new albums that
          we&apos;ve never had before, there is a lot of data required to manually input. POS system
          is somewhat old and it requires .csv file input to populate the data, and a really long
          column table for it. I realized I could fetch data from discogs (which is maybe the
          biggest online music data library and marketplace), and use that data to populate the
          table and the file to import in POS
        </p>
        <h2>Links:</h2>
        <a
          href="https://github.com/Pargeo82/cedeterija"
          target="_blank"
          rel="noreferrer"
          title="github link"
        >
          <Image src="/icons8-github.svg" alt="github" width={40} height={40} />
        </a>
        <div>
          <a
            href="https://cedeterija.vercel.app/"
            target="_blank"
            rel="noreferrer"
            title="Cedeterija app"
            className={styles.link}
          >
            Cedeterija app
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
