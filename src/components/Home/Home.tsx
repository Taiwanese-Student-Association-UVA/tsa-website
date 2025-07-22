import { link } from "fs";
import styles from "./Home.module.css";
const instagram = require("../../assets/buttons/IGflower.png");
const facebook = require("../../assets/buttons/FBflower.png");
const linkedin = require("../../assets/buttons/LIflower.png");

const Home = () => {
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
      <div className={styles.about}>
        <div className={styles.blurb}>
          <h2>Who we are...</h2>
          <p>Insert description here...</p>
        </div>
        <div className={styles.member}>
          <h3>Become a member today!</h3>
          <button>Returning Member</button>
          <button>New Member</button>
        </div>
        <div className={styles.socials}>
          <h3>Follow us on our Socials!</h3>
          <a
            href="https://www.instagram.com/tsaatuva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="blank"
          >
            <img src={instagram} alt="Button for the TSA Instagram account" />
          </a>
          <a href="https://www.facebook.com/groups/tsaatuva" target="blank">
            <img src={facebook} alt="Button for the TSA Facebook account" />
          </a>
          <a href="https://www.linkedin.com/company/tsaatuva/" target="blank">
            <img src={linkedin} alt="Button for the TSA LinkedIn account" />
          </a>
        </div>
      </div>
      <div className={styles.excard}>
        <h2>How to use our EZCards</h2>
        <p>Insert Description Here....</p>
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
      </div>
      <div className={styles.footer}>
        <button>yuurrrr</button>
        <p>footer</p>
      </div>
    </>
  );
};

export default Home;
