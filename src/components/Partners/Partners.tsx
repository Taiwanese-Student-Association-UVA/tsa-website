import styles from "./Partners.module.css";
import {
  Chaps,
  Extreme,
  ComingSoon,
  packet,
} from "../../assets/partners/index";

const Partners = () => {
  return (
    <>
      <div className={styles.Header}>
        <h1>Introducing TSA's EZCards!</h1>
        <p>
          This year we are introducing our brand new TSA EasyCard! This card is
          your passport to exclusive perks, discounts, and EasyCard only
          benefits all year long. For just $12, you’ll unlock over $50 in value
          through savings at local businesses, priority access at TSA events,
          and free extras made just for you!
        </p>
        <h2>Our Current Partners</h2>
        <div className={styles.pictures}>
          <a href="https://www.chapsicecream.com/" target="_blank">
            <img src={Chaps} alt="Chaps Ice Cream logo" />
          </a>
          <a
            href="https://www.extremepizza.com/location/charlottesville-virginia/"
            target="_blank"
          >
            <img src={Extreme} alt="Extreme Pizza logo" />
          </a>
          <img src={ComingSoon} alt="Placeholder for incoming partners" />
        </div>
      </div>
      <div className={styles.howto}>
        <h2>How it works:</h2>
        <p>You can enjoy the perks in just three simple steps!</p>
        <p>
          <ol>
            <li>
              <strong>Get Your Card</strong> - Purchase your EasyCard at TSA
              GBMs, exec office hours (TBD), or at our major events with cash,
              Venmo (@tsaatuva) or Zelle
              (uvataiwanesestudentassociation@gmail.com)
            </li>
            <li>
              <strong>Show & Save</strong> - Simply show your EasyCard at
              checkout or the register at participating businesses and TSA
              tables
            </li>
            <li>
              <strong>Enjoy the Perks</strong> - Discounts, raffle tickets,
              express lines, and more - your card pays for itself fast,
            </li>
          </ol>
        </p>
        <h2>Where to buy:</h2>
        <p>
          <ul>
            <li>GBMs</li>
            <li>Exec Office Hours (coming soon!)</li>
            <li>
              Major TSA Events (Fam Reveals, Mid-Autumn Fest, Taste of Taiwan,
              etc.)
            </li>
          </ul>
          Keep up with the latest sales announcements on Instagram @tsaatuva!
        </p>
        <h2>Perks and Benefits</h2>
        <p>
          <br />
          Here's what you get for just $12:
          <ul>
            <li>
              Discounts with Local Partners
              <ul>
                <li>
                  Free topping at Chap’s (The Corner & Downtown locations)
                </li>
                <li>10% off at Extreme Pizza (5th Street Station)</li>
                <li>More partners coming soon!</li>
              </ul>
            </li>
            <li>
              TSA Event Perks
              <ul>
                <li>
                  Express check-in at Night Market & Taste of Taiwan (skip the
                  line!)
                </li>
                <li>
                  3 extra raffle tickets at Night Market -- get a chance to win
                  tea sets, gift cards, and merch!
                </li>
                <li>10% off ALL TSA merch</li>
                <li>Discounted TSA Semiformal Tickets (Discount info TBD)</li>
                <li>
                  Free professional headshots/photoshoots on the Lawn (Sep 24,
                  4-6PM)
                </li>
              </ul>
            </li>
          </ul>
          Don’t wait -- get your TSA EasyCard and start saving!
        </p>
      </div>
      <div className={styles.Package}>
        <h2>Become a Partner Today!</h2>
        <p>Interested in becoming a partner?</p>
        <iframe src={packet} title="25-26 TSA Partnership Package"></iframe>
      </div>
    </>
  );
};

export default Partners;
