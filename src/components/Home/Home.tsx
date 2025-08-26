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
  about,
} from "../../assets/index";

const Home = () => {
  const [instagramImg, setInstagramImg] = useState(IG);
  const [facebookImg, setFacebookImg] = useState(FB);
  const [linkedinImg, setLinkedinImg] = useState(LI);

  const ScrollPhoto = ({ src, alt }: { src: string; alt: string }) => (
    <motion.img
      src={src}
      alt={alt}
      className={styles.pictures}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ opacity: 1 }}
      animate={{}}
    />
  );

  const SignUpBox = () => {
    return (
      <div className={styles.signupBox}>
        <form
          className={styles.signupForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your Email"
            className={styles.signupInput}
            required
          />
          <button type="submit" className={styles.signupButton}>
            Sign Up!
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      <div className={styles.beginning}>
        <div className={styles.glass}>
          <div className={styles.beginningText}>
            <h1>
              Welcome to
              <br />
              TSA@UVA
            </h1>
            <p>Who are we?</p>
          </div>
        </div>
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
        <div className={styles.picturesContainer2}>
          <Marquee speed={40} gradient={false} direction={"right"}>
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
        <div className={styles.picturesContainer3}>
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
          <div className={styles.who}>
            <h2>
              <strong>Who we are...</strong>
            </h2>
          </div>
          <div className={styles.pic}>
            <img src={about} alt="Picture in flower container" />
          </div>
          <div className={styles.description}>
            <p>
              Description Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec sed lectus lacus. Nam ac nulla nisl. Suspendisse eget
              justo elementum, euismod tortor ut, tempor neque. Nam suscipit
              elit quis dui pulvinar, ac semper magna viverra. Sed quis augue
              mauris. Maecenas quis placerat sapien.
            </p>
          </div>
          <div className={styles.social}>
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
          <div className={styles.forms}>
            <h3>Become a member today!</h3>
            <button>Returning Member</button>
            <button>New Member</button>
          </div>
        </div>
        <div className={styles.ezcard}>
          <div className={styles.header}>
            <h2>
              <strong>How to Use our EZCards</strong>
            </h2>
          </div>
          <div className={styles.description}>
            <p>
              Description Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec sed lectus lacus. Nam ac nulla nisl. Suspendisse eget
              justo elementum, euismod tortor ut, tempor neque. Nam suscipit
              elit quis dui pulvinar, ac semper magna viverra. Sed quis augue
              mauris. Maecenas quis placerat sapien.
            </p>
          </div>
          <div className={styles.pic}>
            <a href="partners">
              <img src={ezCard} alt="TSA EzCard" />
            </a>
          </div>
        </div>

        <div className={styles.newsletter}>
          <div className={styles.header}>
            <h2>
              <strong>Previous Newsletter</strong>
            </h2>
            <p>Month, Week ## Edition</p>
          </div>
          <div className={styles.news}>
            <h3>
              <strong>TSA News...</strong>
            </h3>
            <p>Blah blah blah here is some tsa news</p>
          </div>
          <div className={styles.dish}>
            <h3>
              <strong>Dish of the Week</strong>
            </h3>
            <p>here is da dish of the week</p>
          </div>
          <div className={styles.pic}>
            <img src={ezCard} />
          </div>
          <div className={styles.ez}>
            <h3>
              <strong>Easycard Eats</strong>
            </h3>
            <p>here r the eats</p>
          </div>
          <div className={styles.signup}>
            <p>To read more, sign up for our newsletter!</p>
            <SignUpBox />
          </div>
        </div>

        <div className={styles.current}>
          <h2>
            <strong>Current Events</strong>
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
                  the bulk of the card’s content.
                </p>
                <a href="#">Click here for more</a>
              </div>
            </div>
            <div className={styles.article}>
              <img src={ezCard} alt="..." />
              <div>
                <h3>Article title</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#">Click here for more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
