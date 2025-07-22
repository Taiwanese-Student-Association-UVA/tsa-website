import "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className="beginning">
        <h1>Welcome to the Home Page</h1>
        <p>Who are we?</p>
      </div>
      <div className="about">
        <h2>Who we are...</h2>
        <p>Insert description here...</p>
        <h3>Become a member today!</h3>
        <button>Returning Member</button>
        <button>New Member</button>
        <h3>Follow us on our Socials!</h3>
        <button>Instagram</button>
        <button>Facebook</button>
        <button>LinkedIn</button>
      </div>
      <div className="ezcard">
        <h2>How to use our EZCards</h2>
        <p>Insert Description Here....</p>
      </div>
      <div className="newsletter">
        <h2>Previous Newsletters</h2>
        <p>Blurb...</p>
        <p>Caption..</p>
        <p>TSA News...</p>
      </div>
      <div className="currentEvents">
        <h2>Current Events</h2>
        <p>Big news..</p>
        <p>More news..</p>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Home;
