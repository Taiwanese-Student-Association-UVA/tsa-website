import { useState } from "react";
import { motion } from "framer-motion";
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ opacity: 1 }}
      animate={{}}
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
        <div className={styles.picturesContainer}>
          <Marquee speed={40} gradient={false}>
            <ScrollPhoto
              src={one}
              alt="Linda Tol and Kerstin Quach in a boba shop."
            />
            <ScrollPhoto src={two} alt="Teddy Bear keychains kissing" />
            <ScrollPhoto
              src={three}
              alt="Elliot Park sticking his tongue out"
            />
            <ScrollPhoto
              src={four}
              alt="Najiba R Julia Nguyen smiling at Night Market"
            />
            <ScrollPhoto src={five} alt="Rachel Yu and Albany Viet smiling" />
            <ScrollPhoto
              src={six}
              alt="Brandon Nesbit and Robert Chen posing after Night Market performance"
            />
            <ScrollPhoto
              src={seven}
              alt="Nathaly Due posed with her origami flowers"
            />
            <ScrollPhoto
              src={eight}
              alt="Yellow lantern with cute painted cartoon cat on it"
            />
            <ScrollPhoto
              src={nine}
              alt="Chloe Ro, Rachel Yu, and Hannah Lin posing"
            />
            <ScrollPhoto
              src={ten}
              alt="Olivia Jung, Miki Li, Hebba Mohmand, and Albany Viet posing before ASU Semi Formal"
            />
            <ScrollPhoto
              src={eleven}
              alt="Jonathan Luu and Helen Lin with teacups"
            />
          </Marquee>
        </div>
      </div>
      <div className={styles.content}>
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
