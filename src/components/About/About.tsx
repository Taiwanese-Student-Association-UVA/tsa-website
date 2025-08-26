import React from "react";
import "./about.css";
import BoardSection from "./BoardSection";
import PastBoardsAccordion from "./PastBoardsAccordion";
import ContactForm from "./ContactForm";

const About: React.FC = () => {
  return (
    <main className="page">
      {/* About */}
      <section className="section">
        <header className="sectionHeader">
          <h1 className="title">About Us</h1>
        </header>

        {/* Mission / Constitution */}
        <div className="twoCol">
          <article className="cardLike">
            <h2 className="sectionTitle">Mission</h2>
            <p className="muted">
              We foster community, celebrate culture, and create meaningful
              experiences for all of our members through events, mentorship,
              and service.
            </p>
          </article>

          <article className="cardLike">
            <h2 className="sectionTitle">Constitution</h2>
            <p className="muted">
              Learn how we’re structured and governed—our values, officer
              roles, elections, and decision processes.
            </p>
            <a
              className="viewAll"
              href="/constitution.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Constitution
            </a>
          </article>
        </div>
      </section>

      {/* Join */}
      <section className="section">
        <div className="ctaCard">
          <h3 className="ctaTitle">Get Involved</h3>
          <div className="ctaActions">
            <a className="btn" href="https://example.com/membership">Become a member</a>
            <a className="btnGhost" href="https://example.com/newsletter">Join our newsletter</a>
          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="section">
        <div className="twoCol">
          <article className="cardLike">
            <h2 className="sectionTitle">Follow Us</h2>
            <div className="socialRow">
              <a className="chip" href="https://instagram.com" aria-label="Instagram">Instagram</a>
              <a className="chip" href="https://facebook.com" aria-label="Facebook">Facebook</a>
              <a className="chip" href="https://www.linkedin.com" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </article>

          <article className="cardLike">
            <h2 className="sectionTitle">Membership</h2>
            <p className="muted">
              Join our community and get access to events, mentorship, and more.
            </p>
            <a className="viewAll" href="https://example.com/membership">Learn more</a>
          </article>
        </div>
      </section>

      {/* TSA Board */}
      <section className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">TSA Board</h2>
        </div>
        <BoardSection />
      </section>

      {/* Past Boards */}
      <section className="section" id="past-boards">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Past Boards</h2>
        </div>
        <PastBoardsAccordion
          years={[
            {
              year: "2023–2024",
              members: [
                { name: "John Doe", role: "President" },
                { name: "Jane Doe", role: "Vice President" },
              ],
            },
            {
              year: "2022–2023",
              members: [
                { name: "John Doe", role: "President" },
                { name: "Jane Smith", role: "Treasurer" },
              ],
            },
          ]}
        />
      </section>

      {/* Contact */}
      <section className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Contact Us</h2>
        </div>
        <div className="cardLike">
          <ContactForm postUrl="/api/contact" />
        </div>
      </section>

      {/* Feedback Forms */}
      <section className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Feedback Forms</h2>
        </div>

        <ul className="list">
          <li>
            <a className="listCard" href="#event-feedback">
              <div className="listThumb" />
              <div className="listBody">
                <div className="listMeta">
                  <span className="listTitle">Event Feedback</span>
                  <span className="listDate">Open</span>
                </div>
                <p className="listExcerpt">
                  Tell us what you liked and what we can improve.
                </p>
                <span className="listCTA">Fill out form →</span>
              </div>
            </a>
          </li>

          <li>
            <a className="listCard" href="#suggestions">
              <div className="listThumb" />
              <div className="listBody">
                <div className="listMeta">
                  <span className="listTitle">Suggestion Box</span>
                  <span className="listDate">Always on</span>
                </div>
                <p className="listExcerpt">We’re all ears—share any ideas.</p>
                <span className="listCTA">Submit a suggestion →</span>
              </div>
            </a>
          </li>

          <li>
            <a className="listCard" href="#general-feedback">
              <div className="listThumb" />
              <div className="listBody">
                <div className="listMeta">
                  <span className="listTitle">General Feedback</span>
                  <span className="listDate">Open</span>
                </div>
                <p className="listExcerpt">Help us build a better TSA.</p>
                <span className="listCTA">Share feedback →</span>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default About;
