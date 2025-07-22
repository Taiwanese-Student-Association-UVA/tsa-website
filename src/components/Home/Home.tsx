import styles from "./Home.module.css";
const instagram = require("../../assets/buttons/IGflower.png");

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
        <h2>Who we are...</h2>
        <p>Insert description here...</p>
        <h3>Become a member today!</h3>
        <button>Returning Member</button>
        <button>New Member</button>
        <h3>Follow us on our Socials!</h3>
        <a
          href="https://www.instagram.com/tsaatuva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="blank"
        >
          <img src={instagram} alt="Button for the TSA Instagram account" />
        </a>
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
