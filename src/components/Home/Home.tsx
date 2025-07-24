import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import {
  IG,
  FB,
  LI,
  IGhover,
  FBhover,
  LIhover,
} from "../../assets/buttons/index";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
} from "../../assets/homepage/index";
import {
  lightFlower,
  darkFlower,
  taiwanBG,
  ezCard,
  EZhover,
} from "../../assets/index";

const Home = () => {
  const [instagramImg, setInstagramImg] = useState(IG);
  const [facebookImg, setFacebookImg] = useState(FB);
  const [linkedinImg, setLinkedinImg] = useState(LI);
  const [ezImg, setEzImg] = useState(ezCard);

  const ScrollPhoto = ({ src, alt }: { src: string; alt: string }) => (
    <motion.img
      src={src}
      alt={alt}
      className={styles.pictures}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    />
  );

  return (
    <>
      <div className={styles.beginning}>
        <h1>
          Welcome to
          <br />
          TSA@UVA
        </h1>
        <p>Who are we?</p>
      </div>
      <div className={styles.content}>
        <div className={styles.picturesContainer}>
          <ScrollPhoto src={one} alt="Dark flower" />
          <ScrollPhoto src={two} alt="Light flower" />
          <ScrollPhoto src={three} alt="Taiwan" />
          <ScrollPhoto src={four} alt="Taiwan" />
          <ScrollPhoto src={five} alt="Taiwan" />
          <ScrollPhoto src={six} alt="Taiwan" />
          <ScrollPhoto src={seven} alt="Taiwan" />
          <ScrollPhoto src={eight} alt="Taiwan" />
          <ScrollPhoto src={nine} alt="Taiwan" />
          <ScrollPhoto src={ten} alt="Taiwan" />
          <ScrollPhoto src={eleven} alt="Taiwan" />
        </div>
        <div className={styles.about}>
          <h2>Who we are...</h2>
          <div className={styles.description}>
            <img src={lightFlower} alt="Picture in flower container" />
            <p>
              Description Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec sed lectus lacus. Nam ac nulla nisl. Suspendisse eget
              justo elementum, euismod tortor ut, tempor neque. Nam suscipit
              elit quis dui pulvinar, ac semper magna viverra. Sed quis augue
              mauris. Maecenas quis placerat sapien.
            </p>
          </div>
          <div className={styles.description}>
            <div className={styles.aboutSub}>
              <h3>Become a member today!</h3>
              <button>Returning Member</button>
              <button>New Member</button>
            </div>
            <div className={styles.aboutSub}>
              <h3>Follow us on our Socials!</h3>
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
          </div>
        </div>
        <h2>How to Use our EZCards</h2>
        <div className={styles.ezcard}>
          <div className={styles.ezcardText}>
            <p>
              Description Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec sed lectus lacus. Nam ac nulla nisl. Suspendisse eget
              justo elementum, euismod tortor ut, tempor neque. Nam suscipit
              elit quis dui pulvinar, ac semper magna viverra. Sed quis augue
              mauris. Maecenas quis placerat sapien.
            </p>
          </div>
          <div className={styles.ezcardImage}>
            <img src={darkFlower} alt="Ezcard background layer" />
          </div>
          <div className={styles.EZCard}>
            <a
              href="partners"
              onMouseOver={() => setEzImg(EZhover)}
              onMouseOut={() => setEzImg(ezCard)}
            >
              <img src={ezImg} alt="TSA EzCard" />
            </a>
          </div>
        </div>

        <div className={styles.newsletter}>
          <h2>Previous Newsletters</h2>
          <p>Blurb...</p>
          <p>Caption..</p>
          <p>TSA News...</p>
        </div>

        <div className={styles.current}>
          <h2>Current Events</h2>
          <p>Big news..</p>
          <p>More news..</p>
          <img
            src={taiwanBG}
            alt="Background for current events section in the shape of Taiwan."
          />
        </div>
      </div>

      <div className={styles.footer}>
        <a
          href="https://www.instagram.com/tsaatuva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="blank"
          onMouseOver={() => setInstagramImg(IGhover)}
          onMouseOut={() => setInstagramImg(IG)}
        >
          <img src={instagramImg} alt="Button for the TSA Instagram account" />
        </a>
        <a
          href="https://www.facebook.com/groups/tsaatuva"
          target="blank"
          onMouseOver={() => setFacebookImg(FBhover)}
          onMouseOut={() => setFacebookImg(FB)}
        >
          <img src={facebookImg} alt="Button for the TSA Facebook account" />
        </a>
        <a
          href="https://www.linkedin.com/company/tsaatuva/"
          target="blank"
          onMouseOver={() => setLinkedinImg(LIhover)}
          onMouseOut={() => setLinkedinImg(LI)}
        >
          <img src={linkedinImg} alt="Button for the TSA LinkedIn account" />
        </a>
      </div>
    </>
  );
};

export default Home;
