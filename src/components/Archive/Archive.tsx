import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Archive.module.css";

// swap w/ real images
const heroSlides = [
  {
    src: require("../../assets/place.jpg"),
    title: "(replace)",
    href: "/archive/gallery/(replace)",
  },
  {
    src: require("../../assets/place2.webp"),
    title: "(replace)",
    href: "/archive/gallery/(replace)",
  },
  {
    src: require("../../assets/headplace.jpg"),
    title: "(replace)",
    href: "/archive/gallery/(replace)",
  },
  {
    src: require("../../assets/logo.png"),
    title: "(replace)",
    href: "/(replace)",
  },
];

const galleryTeasers = [
  { src: require("../../assets/place.jpg"), title: "(replace)", href: "/archive/gallery/(replace)" },
  { src: require("../../assets/place2.webp"), title: "(replace)", href: "/archive/gallery/(replace)" },
  { src: require("../../assets/headplace.jpg"), title: "(replace)", href: "/archive/gallery/(replace)" },
];

const newsletterList = [
  {
    slug: "(replace)",
    title: "(replace)",
    excerpt: "(replace)",
    date: "(replace)",
    href: "/archive/newsletters/(replace)",
  },
  {
    slug: "(replace)",
    title: "(replace)",
    excerpt: "(replace)",
    date: "(replace)",
    href: "/archive/newsletters/(replace)",
  },
  {
    slug: "(replace)",
    title: "(replace)",
    excerpt: "(replace)",
    date: "(replace)",
    href: "/archive/newsletters/(replace)",
  },
];

/** ——— helpers ——— */
function useAutoplay(count: number, delay = 5000) {
  const [i, setI] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setI((v) => (v + 1) % count);
    }, delay);
    return () => clearInterval(id);
  }, [count, delay]);

  return {
    index: i,
    setIndex: setI,
    onMouseEnter: () => (paused.current = true),
    onMouseLeave: () => (paused.current = false),
  };
}

const Archive: React.FC = () => {
  const slideCount = heroSlides.length;
  const { index, setIndex, onMouseEnter, onMouseLeave } =
    useAutoplay(slideCount, 5500);

  const startX = useRef<number | null>(null);
  const onTouchStart: React.TouchEventHandler = (e) =>
    (startX.current = e.touches[0].clientX);
  const onTouchEnd: React.TouchEventHandler = (e) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx > 40) setIndex((v) => (v - 1 + slideCount) % slideCount);
    if (dx < -40) setIndex((v) => (v + 1) % slideCount);
    startX.current = null;
  };

  const trackStyle = useMemo(
    () => ({ transform: `translateX(${-index * 100}%)` }),
    [index]
  );

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Archive</h1>

      {/* ——— Highlight Carousel ——— */}
      <section
        className={styles.hero}
        aria-label="Highlights"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles.heroViewport}>
          <div className={styles.heroTrack} style={trackStyle}>
            {heroSlides.map((s, i) => (
              <article className={styles.slide} key={i}>
                <Link to={s.href} className={styles.slideLink} aria-label="(replace)">
                  <img className={styles.slideImg} src={s.src} alt="(replace)" />
                  <div className={styles.slideOverlay}>
                    <div className={styles.slideTag}>(replace)</div>
                    <h3 className={styles.slideTitle}>(replace)</h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <button
          className={`${styles.navBtn} ${styles.prev}`}
          aria-label="Previous slide"
          onClick={() => setIndex((v) => (v - 1 + slideCount) % slideCount)}
        >
          ‹
        </button>
        <button
          className={`${styles.navBtn} ${styles.next}`}
          aria-label="Next slide"
          onClick={() => setIndex((v) => (v + 1) % slideCount)}
        >
          ›
        </button>

        <div className={styles.dots} role="tablist" aria-label="Slide selector">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ——— Gallery ——— */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <Link className={styles.viewAll} to="/archive/gallery">
            View All
          </Link>
        </div>

        <div className={styles.galleryRow}>
          {galleryTeasers.map((g, i) => (
            <Link to={g.href} key={i} className={styles.galleryCard}>
              <img className={styles.galleryImg} src={g.src} alt="(replace)" />
              <span className={styles.galleryLabel}>(replace)</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ——— Newsletters ——— */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Newsletters</h2>
          <Link className={styles.viewAll} to="/archive/newsletters">
            View All
          </Link>
        </div>

        <ul className={styles.newsList}>
          {newsletterList.map((n) => (
            <li key={n.slug} className={styles.newsItem}>
              <Link to={n.href} className={styles.newsCard} aria-label="(replace)">
                <div className={styles.newsThumb} />
                <div className={styles.newsBody}>
                  <div className={styles.newsMeta}>
                    <span className={styles.newsTitle}>(replace)</span>
                    <time className={styles.newsDate}>(replace)</time>
                  </div>
                  <p className={styles.newsExcerpt}>(replace)</p>
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

export default Archive;
