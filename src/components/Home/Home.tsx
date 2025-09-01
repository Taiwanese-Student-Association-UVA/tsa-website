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
import { ezCard, about } from "../../assets/index";

const Home = () => {
  const [instagramImg, setInstagramImg] = useState(IG);
  const [facebookImg, setFacebookImg] = useState(FB);
  const [linkedinImg, setLinkedinImg] = useState(LI);

  const ScrollPhoto = ({
    src,
    alt,
    link,
  }: {
    src: string;
    alt: string;
    link: string;
  }) => (
    <a href={link} target="_blank">
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
    </a>
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
              <strong>
                Welcome to
                <br />
                TSA@UVA
              </strong>
            </h1>
          </div>
        </div>
        <div className={styles.picturesContainer}>
          <Marquee speed={40} gradient={false}>
            <ScrollPhoto
              src={one}
              alt="Linda Tol and Kerstin Quach in a boba shop."
              link="https://www.facebook.com/photo.php?fbid=1166363978865912&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={two}
              alt="Teddy Bear keychains kissing"
              link="https://www.facebook.com/photo.php?fbid=1166363972199246&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={three}
              alt="Elliot Park sticking his tongue out"
              link="https://www.facebook.com/photo.php?fbid=1095020566000254&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={four}
              alt="Najiba Rushmila abd Julia Nguyen smiling at Night Market"
              link="https://www.facebook.com/photo.php?fbid=1095019759333668&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={five}
              alt="Rachel Yu and Albany Viet smiling"
              link="https://www.facebook.com/photo.php?fbid=1095018812667096&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={six}
              alt="Brandon Nesbit and Robert Chen posing after Night Market performance"
              link="https://www.facebook.com/photo.php?fbid=1095018692667108&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={seven}
              alt="Nathaly Du posed with her origami flowers"
              link="https://www.facebook.com/photo.php?fbid=1064239372411707&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={eight}
              alt="Yellow lantern with cute painted cartoon cat on it"
              link="https://www.facebook.com/photo.php?fbid=1062670562568588&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={nine}
              alt="Chloe Ro, Rachel Yu, and Hannah Lin in kitchen during Taste of Taiwan event"
              link="https://www.facebook.com/photo.php?fbid=989463163222662&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={ten}
              alt="Olivia Jung, Miki Li, Hebba Mohmand, and Albany Viet posing before ASU Semi Formal"
              link="https://www.facebook.com/photo/?fbid=989456446556667&set=pb.100064769616868.-2207520000"
            />
            <ScrollPhoto
              src={eleven}
              alt="Jonathan Luu and Helen Lin with teacups during Mid-Autumn Festival event"
              link="https://www.facebook.com/photo.php?fbid=943440154491630&set=pb.100064769616868.-2207520000&type=3"
            />
          </Marquee>
        </div>
        <div className={styles.picturesContainer2}>
          <Marquee speed={40} gradient={false} direction={"right"}>
            <ScrollPhoto
              src={twelve}
              alt="Alanda Guan holding up paper lantern she painted during Lanterns on the Lawn event"
              link="https://www.facebook.com/photo.php?fbid=810523647783282&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={thirteen}
              alt="Kavis Subenja, Jonathan Luu, and Chloe Ro with pumpkin they painted during Pumpkin Painting event"
              link="https://www.facebook.com/photo/?fbid=720543930114588&set=a.720546153447699"
            />
            <ScrollPhoto
              src={fourteen}
              alt="Merchandise table during the summer TeasNYou Fundraiser"
              link="https://www.facebook.com/photo.php?fbid=1166363275532649&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={fifteen}
              alt="Dorothy Philips and Sujin Gahng during Night Market"
              link="https://www.facebook.com/photo.php?fbid=1095020429333601&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={sixteen}
              alt="Shooting game stand at Night Market"
              link="https://www.facebook.com/photo/?fbid=1095020182666959&set=a.1092553082913669"
            />
            <ScrollPhoto
              src={seventeen}
              alt="Heewon Lim, Franklin Li, Jonathan Luu, and Jordan Ho smiling during Night Market"
              link="https://www.facebook.com/photo.php?fbid=1095019146000396&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={eighteen}
              alt="Lily Lai, Kristy Lau, and Harshika Challa posing with food during Night Market"
              link="https://www.facebook.com/photo/?fbid=1095018722667105&set=a.1092553082913669"
            />
            <ScrollPhoto
              src={nineteen}
              alt="Jason Phi , Raymond Wen, and Nolan Nguyen posing at Night Market"
              link="https://www.facebook.com/photo/?fbid=1095018706000440&set=a.1092553082913669"
            />
            <ScrollPhoto
              src={twenty}
              alt="Aerial view of the Ampitheatre during Night Market"
              link="https://www.facebook.com/photo.php?fbid=1095012649334379&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={twenty1}
              alt="Lawson Pham and Victoria Hua giving a thumbs up at Night Market"
              link="https://www.facebook.com/photo.php?fbid=1095012439334400&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={twenty2}
              alt="Ring toss game station at Night Market"
              link="https://www.facebook.com/photo/?fbid=1092551316247179&set=a.1092553082913669"
            />
          </Marquee>
        </div>
        <div className={styles.picturesContainer3}>
          <Marquee speed={40} gradient={false}>
            <ScrollPhoto
              src={twenty3}
              alt="Fishing game station at Night Market"
              link="https://www.facebook.com/photo/?fbid=1092551019580542&set=a.1092553082913669"
            />
            <ScrollPhoto
              src={twenty4}
              alt="Bowl of Beef Noodle Soup handed out during Taste of Taiwan event"
              link="https://www.facebook.com/photo.php?fbid=989461293222849&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={twenty5}
              alt="Helen Lin and Joyce Yang holding up introduction stickers"
              link="https://www.facebook.com/photo.php?fbid=937488148420164&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={twenty6}
              alt="Victoria Hua and Dolly Venkadatasari outside of Newcomb Ballroom"
              link="https://www.facebook.com/photo.php?fbid=937488288420150&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={twenty7}
              alt="--, Tracy Ha, Bryan Yuk, and Albany Viet posing for popsicles event"
              link="https://www.facebook.com/photo.php?fbid=939829814852664&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={twenty8}
              alt="Carly Ochgerel and Maggie Nguyen posing with the pumpkins they painted during Pumpkin Painting event"
              link="https://www.facebook.com/photo.php?fbid=953921923443453&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={twenty9}
              alt="Hebba Mohmand posing behind rice paddy hat for ASU SemiFormal"
              link="https://www.facebook.com/photo/?fbid=975128874656091&set=a.975130971322548"
            />
            <ScrollPhoto
              src={thirty}
              alt="Kerstin Quach, Natalie Nguyen, and Stephanie Chu drinking boba during the summer Teas N You fundraiser"
              link="https://www.facebook.com/photo.php?fbid=1166363305532646&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={thirty1}
              alt="Catherine Cheng and Anya Chang during Night Market"
              link="https://www.facebook.com/photo.php?fbid=1095018939333750&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={thirty2}
              alt="Caroline Ding, Victoria Hua, Hannah Tse, and Raymond Huang posing with representatives from TECRO during Night Market"
              link="https://www.facebook.com/photo.php?fbid=1095011826001128&set=pb.100064769616868.-2207520000&type=3"
            />
            <ScrollPhoto
              src={thirty3}
              alt="Natalie Nguyen and Sophie Chen posing with their origami flowers during Flower Shower event"
              link="https://www.facebook.com/photo.php?fbid=1064239392411705&set=pb.100064769616868.-2207520000&type=3"
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
            <h3>
              <strong>Follow us on our Socials!</strong>
            </h3>
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
            <h3>
              <strong>Become a member today!</strong>
            </h3>
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
