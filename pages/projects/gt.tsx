import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navigation/Navbar";
import styles from "../../components/Projects/projects.module.css";
import Image from "next/image";

export default function Cedeterija() {
  return (
    <div className="content">
      <Navbar />
      <div className={`container ${styles.projectContainer}`}>
        <h1>Bar pricelist</h1>
        <div className="flex">
          <div className={styles.imageHolder}>
            <Image
              src="/gt1.png"
              alt="image 1"
              width={744}
              height={968}
              layout="responsive"
            />
          </div>
          <div className={styles.imageHolder}>
            <Image
              src="/gt2.png"
              alt="image 2"
              width={744}
              height={968}
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
            <div className={styles.techno}>
              <Image src="/mongoDB.png" alt="MongoDB" width={50} height={50} />
            </div>
          </div>
        </div>
        <h2>Description:</h2>
        <p className={styles.description}>
          This is an online bar manu for a bar in Zaprešić. It has a dashboard
          where admins (me and the bar owner) have CRUD capabilites for
          articles, and the &quot;special offer&quot; at the beginning of the
          page. It has been written in NextJS and database is MongoDB (Atlas).
          It is mobile-first site.
        </p>
        <h2>Links:</h2>
        <div>
          <a
            href="https://www.caffebargt-martinko.hr/"
            target="_blank"
            rel="noreferrer"
            title="GT menu"
            className={styles.link}
          >
            GT Menu
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
