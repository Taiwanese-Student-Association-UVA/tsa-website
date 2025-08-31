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
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twenty1,
  twenty2,
  twenty3,
  twenty4,
  twenty5,
  twenty6,
  twenty7,
  twenty8,
  twenty9,
  thirty,
  thirty1,
  thirty2,
  thirty3,
} from "../../assets/homepage/index";
import {
  lightFlower,
  darkFlower,
  taiwanBG,
  ezCard,
  about,
} from "../../assets/index";
import { NONAME } from "dns";

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
              alt="Najiba Rushmila abd Julia Nguyen smiling at Night Market"
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
              alt="Chloe Ro, Rachel Yu, and Hannah Lin in kitchen during Taste of Taiwan event"
            />
            <ScrollPhoto
              src={ten}
              alt="Olivia Jung, Miki Li, Hebba Mohmand, and Albany Viet posing before ASU Semi Formal"
            />
            <ScrollPhoto
              src={eleven}
              alt="Jonathan Luu and Helen Lin with teacups during Mid-Autumn Festival event"
            />
          </Marquee>
        </div>
        <div className={styles.picturesContainer2}>
          <Marquee speed={40} gradient={false} direction={"right"}>
            <ScrollPhoto
              src={twelve}
              alt="Alanda Guan holding up paper lantern she painted during Lanterns on the Lawn event"
            />
            <ScrollPhoto
              src={thirteen}
              alt="Kavis Subenja, Jonathan Luu, and Chloe Ro with pumpkin they painted during Pumpkin Painting event"
            />
            <ScrollPhoto
              src={fourteen}
              alt="Merchandise table during the summer TeasNYou Fundraiser"
            />
            <ScrollPhoto
              src={fifteen}
              alt="Dorothy Philips and Sujin Gahng during Night Market"
            />
            <ScrollPhoto
              src={sixteen}
              alt="Shooting game stand at Night Market"
            />
            <ScrollPhoto
              src={seventeen}
              alt="Heewon Lim, Franklin Li, Jonathan Luu, and Jordan Ho smiling during Night Market"
            />
            <ScrollPhoto
              src={eighteen}
              alt="Lily Lai, Kristy Lau, and Harshika Challa posing with food during Night Market"
            />
            <ScrollPhoto
              src={nineteen}
              alt="Jason Phi , Raymond Wen, and Nolan Nguyen posing at Night Market"
            />
            <ScrollPhoto
              src={twenty}
              alt="Aerial view of the Ampitheatre during Night Market"
            />
            <ScrollPhoto
              src={twenty1}
              alt="Lawson Pham and Victoria Hua giving a thumbs up at Night Market"
            />
            <ScrollPhoto
              src={twenty2}
              alt="Ring toss game station at Night Market"
            />
          </Marquee>
        </div>
        <div className={styles.picturesContainer3}>
          <Marquee speed={40} gradient={false}>
            <ScrollPhoto
              src={twenty3}
              alt="Fishing game station at Night Market"
            />
            <ScrollPhoto
              src={twenty4}
              alt="Bowl of Beef Noodle Soup handed out during Taste of Taiwan event"
            />
            <ScrollPhoto
              src={twenty5}
              alt="Helen Lin and Joyce Yang holding up introduction stickers"
            />
            <ScrollPhoto
              src={twenty6}
              alt="Victoria Hua and Dolly Venkadatasari outside of Newcomb Ballroom"
            />
            <ScrollPhoto
              src={twenty7}
              alt="--, Tracy Ha, Bryan Yuk, and Albany Viet posing for popsicles event"
            />
            <ScrollPhoto
              src={twenty8}
              alt="Carly Ochgerel and Maggie Nguyen posing with the pumpkins they painted during Pumpkin Painting event"
            />
            <ScrollPhoto
              src={twenty9}
              alt="Hebba Mohmand posing behind rice paddy hat for ASU SemiFormal"
            />
            <ScrollPhoto
              src={thirty}
              alt="Kerstin Quach, Natalie Nguyen, and Stephanie Chu drinking boba during the summer Teas N You fundraiser"
            />
            <ScrollPhoto
              src={thirty1}
              alt="Catherine Cheng and Anya Chang during Night Market"
            />
            <ScrollPhoto
              src={thirty2}
              alt="Caroline Ding, Victoria Hua, Hannah Tse, and Raymond Huang posing with representatives from TECRO during Night Market"
            />
            <ScrollPhoto
              src={thirty3}
              alt="Natalie Nguyen and Sophie Chen posing with their origami flowers during Flower Shower event"
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
              UVA’s Taiwanese Student Association (TSA) is a student-run,
              undergraduate community celebrating Taiwanese culture on Grounds.
              Through cultural showcases, friendly socials, and service
              projects—including Night Market and Taste of Taiwan—we deepen
              appreciation for Taiwan and create a welcoming home for students
              of every background.
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
            <a href="https://forms.office.com/r/4G44DqZ5qD" target="_blank">
              <button>Member Form</button>
            </a>
          </div>
        </div>
        <div className={styles.ezcard}>
          <div className={styles.header}>
            <h2>
              <strong>Our EZCards</strong>
            </h2>
          </div>
          <div className={styles.description}>
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
          </div>
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
        */}
      </div>
    </>
  );
};

export default Home;
