import { Link } from "react-router-dom";
import styles from "./Home.module.css";

import taipeiIcon from "../../assets/fams/taipei.png";
import tainanIcon from "../../assets/fams/tainan.png";
import taichungIcon from "../../assets/fams/taichung.png";

import MarqueePics from "./MarqueePics";
import RotatingPics from "./RotatingPics";
import Socials from "./Socials";

const Home = () => {
  return (
    <>
      <div className={styles.beginning}>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeSection}>
            <MarqueePics />
          </div>
        </div>

        <div className={styles.glass}>
          <div className={styles.beginningText}>
            <h1>
              Welcome to
              <br />
              TSA@UVA
            </h1>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.about}>
          <strong>
            <h2>
              <strong>Who we are...</strong>
            </h2>
          </strong>

          <div className={styles.rotatingImages}>
            <RotatingPics />
          </div>

          <p>
            UVA's Taiwanese Student Association (TSA) is a student-run,
            undergraduate community celebrating Taiwanese culture on Grounds.
            Through cultural showcases, friendly socials, and service
            projects—including Night Market and Taste of Taiwan—we deepen
            appreciation for Taiwan and create a welcoming home for students of
            every background.
          </p>

          <div className={styles.social}>
            <h3>Follow us on our socials!</h3>
            <Socials />
          </div>

          <div className={styles.forms}>
            <h3>Become a member today!</h3>

            <a
              href="https://forms.office.com/r/4G44DqZ5qD"
              target="_blank"
              rel="noreferrer"
            >
              <button>Member Form</button>
            </a>
          </div>
        </div>

        {/* SORTING QUIZ PROMO */}
        <section className={styles.sortingPromo}>
          <p className={styles.sortingEyebrow}>FIND YOUR FAM</p>

          <h2>Which TSA Fam Are You?</h2>

          <p className={styles.sortingIntro}>
            Are you energetic like Taipei, warm and sentimental like Tainan,
            or curious and independent like Taichung?
          </p>

          <div className={styles.sortingFamPreview}>
            <div className={styles.sortingFam}>
              <img src={taipeiIcon} alt="Taipei Fam" />
              <span>Taipei</span>
            </div>

            <div className={styles.sortingFam}>
              <img src={tainanIcon} alt="Tainan Fam" />
              <span>Tainan</span>
            </div>

            <div className={styles.sortingFam}>
              <img src={taichungIcon} alt="Taichung Fam" />
              <span>Taichung</span>
            </div>
          </div>

          <p className={styles.sortingDescription}>
            Take our 9-question sorting quiz and discover which TSA fam matches
            your vibe best.
          </p>

          <Link to="/sorting-quiz" className={styles.sortingButton}>
            Take the Quiz →
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;