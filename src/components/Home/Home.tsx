import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import styles from "./Home.module.css";
import {
  IG,
  FB,
  LI,
  IGhover,
  FBhover,
  LIhover,
} from "../../assets/buttons/index";
import { ezCard } from "../../assets/index";
import usePhotos from "../photos/usePhotos";

const Home = () => {
  const [instagramImg, setInstagramImg] = useState(IG);
  const [facebookImg, setFacebookImg] = useState(FB);
  const [linkedinImg, setLinkedinImg] = useState(LI);

  const { grouped: marqueePics } = usePhotos(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdn96jdQ2YtCL9IUCi0q7ByZwIAdx5h10I7AgZHVX3YLhk51X-BrxFmQ8gg2t7MVvavM7l3AwrMaNa/pub?gid=0&single=true&output=csv"
  );
  const { grouped: aboutPics } = usePhotos(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdn96jdQ2YtCL9IUCi0q7ByZwIAdx5h10I7AgZHVX3YLhk51X-BrxFmQ8gg2t7MVvavM7l3AwrMaNa/pub?gid=76408374&single=true&output=csv"
  );
  const merged = aboutPics.flat();
  const images = merged.map((p) => p.src);
  const alts = merged.map((p) => p.alt);
  const links = merged.map((p) => p.link);

  const [rotIndex, setRotIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const id = setInterval(() => {
      setRotIndex((prev) => (prev + 1) % images.length);
    }, 5000); // rotate every 5s

    return () => clearInterval(id);
  }, [images]);

  return (
    <>
      <div className={styles.beginning}>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeSection}>
            {marqueePics.map((row, index) => (
              <Marquee
                key={index}
                speed={40}
                gradient={false}
                direction={index % 2 === 1 ? "right" : "left"}
              >
                {row.map((photo, i) => (
                  <a key={i} href={photo.link} target="_blank" rel="noreferrer">
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
            <h2>Who we are...</h2>
          </strong>
          <div className={styles.rotatingImages}>
            <AnimatePresence mode="wait">
              <motion.a
                key={rotIndex}
                href={links[rotIndex]}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={images[rotIndex]}
                  alt={alts[rotIndex]}
                  style={{
                    width: "1000px",
                    height: "700px",
                    objectFit: "contain",
                    borderRadius: "20px",
                  }}
                />
              </motion.a>
            </AnimatePresence>
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
            <h3>Follow us on our Socials!</h3>
            <a
              href="https://www.instagram.com/tsaatuva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
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
              target="_blank"
              rel="noreferrer"
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
              target="_blank"
              rel="noreferrer"
              onMouseOver={() => setLinkedinImg(LIhover)}
              onMouseOut={() => setLinkedinImg(LI)}
            >
              <img
                src={linkedinImg}
                alt="Button for the TSA LinkedIn account"
              />
            </a>
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
        <div className={styles.ezcard}>
          <h2>Our EZCards</h2>
          <p>
            This year we are introducing our brand new TSA EasyCard! This card
            is your passport to exclusive perks, discounts, and EasyCard only
            benefits all year long. For just $12, you'll unlock over $50 in
            value through savings at local businesses, priority access at TSA
            events, and free extras made just for you!
          </p>
          <p>
            To learn how to use our EZCards or read up on all of the perks you
            can get, click on the EZCard to the right!
          </p>
          <div className={styles.pic}>
            <a href="partners">
              <img src={ezCard} alt="TSA EzCard" />
            </a>
          </div>
        </div>
        {/*
        <div className={styles.newsletter}>
          <div className={styles.header}>
            <h2>
              Previous Newsletter
            </h2>
            <p>Month, Week ## Edition</p>
          </div>
          <div className={styles.news}>
            <h3>
              TSA News...
            </h3>
            <p>Blah blah blah here is some tsa news</p>
          </div>
          <div className={styles.dish}>
            <h3>
              Dish of the Week
            </h3>
            <p>here is da dish of the week</p>
          </div>
          <div className={styles.pic}>
            <img src={ezCard} alt="placeholder" />
          </div>
          <div className={styles.ez}>
            <h3>
              Easycard Eats
            </h3>
            <p>here r the eats</p>
          </div>
          <div className={styles.signup}>
            <p>To read more, sign up for our newsletter!</p>
          </div>
        </div>
        <div className={styles.current}>
          <h2>
            Current Events
          </h2>
          <div className={styles.news}>
            <div className={styles.article}>
              <img src={ezCard} alt="..." />
              <div>
                <h3>
                  <em>Article title</em>
                </h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" rel="noreferrer">Click here for more</a>
              </div>
            </div>
            <div className={styles.article}>
              <img src={ezCard} alt="..." />
              <div>
                <h3>Article title</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" rel="noreferrer">Click here for more</a>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </>
  );
};

export default Home;
