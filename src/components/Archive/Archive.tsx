import React, { useState } from "react";
import styles from "./Archive.module.css";
import Section from "../About/Section";
import Card from "../About/Card";

const carouselImages = [
  require("../../assets/place.jpg"),
  require("../../assets/place2.webp"),
  require("../../assets/headplace.jpg"),
  require("../../assets/logo.png"),
];

const gridImages = [
  { src: require("../../assets/place.jpg"), title: "Event 1" },
  { src: require("../../assets/place2.webp"), title: "Event 2" },
  { src: require("../../assets/headplace.jpg"), title: "Event 3" },
  { src: require("../../assets/logo.png"), title: "Logo" },
];

const newsletters = [
  { title: "Newsletter", link: "#" },
  { title: "Newsletter", link: "#" },
  { title: "Newsletter", link: "#" },
];

const Archive = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % carouselImages.length);
  const prev = () => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div className={styles.archivePage}>
      <h1>Archive Page</h1>
      {/* Carousel */}
      <div className={styles.carousel}>
        <button onClick={prev} className={styles.carouselBtn}>&lt;</button>
        <img src={carouselImages[current]} alt="carousel" className={styles.carouselImg} />
        <button onClick={next} className={styles.carouselBtn}>&gt;</button>
      </div>
      {/* Picture Grid */}
      <Section id="picture-grid" title="Photo Gallery">
        <div className={styles.grid}>
          {gridImages.map((img, i) => (
            <div key={i} className={styles.gridItem}>
              <img src={img.src} alt={img.title} className={styles.gridImg} />
              <div className={styles.gridTitle}>{img.title}</div>
            </div>
          ))}
        </div>
      </Section>
      {/* Newsletters Section */}
      <Section id="newsletters" title="Past Newsletters">
        <div className={styles.newsletters}>
          {newsletters.map((n, i) => (
            <Card key={i} title={n.title} href={n.link} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Archive;
