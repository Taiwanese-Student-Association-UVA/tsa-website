import React from "react";
import { Link } from "react-router-dom";
import styles from "../Archive.module.css";
import img1 from "../../../assets/place.jpg";
import img2 from "../../../assets/place2.webp";
import img3 from "../../../assets/headplace.jpg";

const albums = [
  { src: img1, title: "(replace)", href: "/archive/gallery/(replace)" },
  { src: img2, title: "(replace)", href: "/archive/gallery/(replace)" },
  { src: img3, title: "(replace)", href: "/archive/gallery/(replace)" },
];

const Gallery: React.FC = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Gallery</h1>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>(replace)</h2>
        </div>
        <div className={styles.galleryRow}>
          {albums.map((a, i) => (
            <Link key={i} to={a.href} className={styles.galleryCard}>
              <img className={styles.galleryImg} src={a.src} alt="(replace)" />
              <span className={styles.galleryLabel}>{a.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
