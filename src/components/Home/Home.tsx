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
              href="https://l.messenger.com/l.php?u=https%3A%2F%2Fforms.cloud.microsoft%2Fpages%2Fresponsepage.aspx%3Fid%3Dx4A0ewc3c0iLd-IWczplrHWPOWb_dbpNm8rjwY0EiudUQ044VkcxR0hEMks0SUpCNko4U0RHVzEzSy4u%26origin%3DQRCode%26route%3Dshorturl&h=AUAbU6wjUhtkvkGZa4ZnW_Dvy5DS1wlmaMgXMW8YyaP8J2WPiP090oIDd0rxaCGLUPk4vKrTNAGmhrwHk8X0d8QgXyUBAdEw2aIWmr-XcWwyp3BDwsHLqBGQ6C38Eq3BAptpL8Y88YWcPcM"
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