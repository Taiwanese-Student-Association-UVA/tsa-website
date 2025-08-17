import React from "react";
import { Link } from "react-router-dom";
import styles from "../Archive.module.css";

const newsletters = [
  { slug: "(replace)", title: "(replace)", date: "(replace)", excerpt: "(replace)", href: "/archive/newsletters/(replace)" },
  { slug: "(replace)", title: "(replace)", date: "(replace)", excerpt: "(replace)", href: "/archive/newsletters/(replace)" },
];

const Newsletters: React.FC = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>(replace)</h1>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>(replace)</h2>
        </div>
        <ul className={styles.newsList}>
          {newsletters.map((n) => (
            <li key={n.slug} className={styles.newsItem}>
              <Link to={n.href} className={styles.newsCard}>
                <div className={styles.newsThumb} />
                <div className={styles.newsBody}>
                  <div className={styles.newsMeta}>
                    <span className={styles.newsTitle}>{n.title}</span>
                    <time className={styles.newsDate}>{n.date}</time>
                  </div>
                  <p className={styles.newsExcerpt}>{n.excerpt}</p>
                  <span className={styles.newsCTA}>(replace)</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Newsletters;
