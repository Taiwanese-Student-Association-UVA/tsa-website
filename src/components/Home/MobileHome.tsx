import { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import styles from "./MobileHome.module.css";
import usePhotos from "../photos/usePhotos";
import {
  IG,
  FB,
  LI,
  IGhover,
  FBhover,
  LIhover,
} from "../../assets/buttons/index";
import { ezCard } from "../../assets/index";

const MobileHome = () => {
  const [instagramImg, setInstagramImg] = useState(IG);
  const [facebookImg, setFacebookImg] = useState(FB);
  const [linkedinImg, setLinkedinImg] = useState(LI);

  const { grouped } = usePhotos(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdn96jdQ2YtCL9IUCi0q7ByZwIAdx5h10I7AgZHVX3YLhk51X-BrxFmQ8gg2t7MVvavM7l3AwrMaNa/pub?gid=0&single=true&output=csv"
  );

  return (
    <>
      <div className={styles.beginning}>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeSection}>
            {grouped.map((row, index) => (
              <Marquee
                key={index}
                speed={40}
                gradient={false}
                direction={index % 2 === 1 ? "right" : "left"}
              >
                {row.map((photo, i) => (
                  <a key={i} href={photo.link} target="_blank">
                    <motion.img
                      src={photo.src}
                      alt={photo.alt}
                      className={styles.pictures}
                      initial={{ opacity: 0.5 }}
                      whileInView={{ opacity: 0.5 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ opacity: 1 }}
                      animate={{}}
                    />
                  </a>
                ))}
              </Marquee>
            ))}
          </div>
        </div>
        <div className={styles.glass}>
          <div className={styles.beginningText}>
            <h1>
              <strong>
                Welcome to
                <br />
                TSA@UVA
              </strong>
            </h1>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.about}>
          <h2>
            <strong>Who we are...</strong>
          </h2>
          <p>
            UVA’s Taiwanese Student Association (TSA) is a student-run,
            undergraduate community celebrating Taiwanese culture on Grounds.
            Through cultural showcases, friendly socials, and service
            projects—including Night Market and Taste of Taiwan—we deepen
            appreciation for Taiwan and create a welcoming home for students of
            every background.
          </p>
          <h3>
            <strong>Follow us on our Socials!</strong>
          </h3>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/tsaatuva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="blank"
              onMouseOver={() => setInstagramImg(IGhover)}
              onMouseOut={() => setInstagramImg(IG)}
            >
              <img
                src={instagramImg}
                alt="Button for the TSA Instagram account"
              />
            </a>
            <a
              href="https://www.facebook.com/groups/tsaatuva"
              target="blank"
              onMouseOver={() => setFacebookImg(FBhover)}
              onMouseOut={() => setFacebookImg(FB)}
            >
              <img
                src={facebookImg}
                alt="Button for the TSA Facebook account"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/tsaatuva/"
              target="blank"
              onMouseOver={() => setLinkedinImg(LIhover)}
              onMouseOut={() => setLinkedinImg(LI)}
            >
              <img
                src={linkedinImg}
                alt="Button for the TSA LinkedIn account"
              />
            </a>
          </div>
          <h3>
            <strong>Become a member today!</strong>
          </h3>
          <a href="https://forms.office.com/r/4G44DqZ5qD" target="_blank">
            <button>Member Form</button>
          </a>
        </div>
        <div className={styles.ezcardBG}>
          <div className={styles.ezcard}>
            <h2>
              <strong>Our EZCards</strong>
            </h2>
            <p>
              This year we are introducing our brand new TSA EasyCard! This card
              is your passport to exclusive perks, discounts, and EasyCard only
              benefits all year long. For just $12, you’ll unlock over $50 in
              value through savings at local businesses, priority access at TSA
              events, and free extras made just for you!
            </p>
            <p>
              To learn how to use our EZCards or read up on all of the perks you
              can get, click on the EZCard to the right!
            </p>
            <a href="partners">
              <img src={ezCard} alt="TSA EzCard" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHome;
