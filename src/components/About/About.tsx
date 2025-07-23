import React from "react";
import "./about.css";
import BoardGrid, { Member } from "./BoardGrid";
import PastBoardsAccordion from "./PastBoardsAccordion";
import ContactForm from "./ContactForm";

const currentBoard: Member[] = [
  { name: "name", role: "President" },
  { name: "name", role: "Vice President" },
  { name: "name", role: "Treasurer" },
  { name: "name", role: "Secretary" },
];

const pastBoards = [
  {
    year: "2023-2024",
    members: [
      { name: "name", role: "President" },
      { name: "name", role: "Vice President" },
    ],
  },
  {
    year: "2022-2023",
    members: [
      { name: "name", role: "President" },
      { name: "name", role: "Vice President" },
    ],
  },
];

const About = () => {
  return (
    <>
      <div className="about-beginning">
        <h1>About Us</h1>
        <p>Taiwanese Student Association at UVA — building community, sharing culture, and creating memories.</p>
      </div>
      <div className="about-mission">
        <h2>Mission</h2>
        <p>We aim to foster a welcoming community for Taiwanese and Taiwan‑interested students at UVA through cultural events, social gatherings, and advocacy.</p>
        <a href="#" target="_blank" rel="noopener noreferrer">View Constitution (PDF)</a>
      </div>
      <div className="about-get-involved">
        <h2>Get Involved</h2>
        <p>Interested in joining? Come to our events or reach out to us! Membership is open to all UVA students.</p>
      </div>
      <div className="about-member-forms">
        <h2>Member Forms</h2>
        <ul>
          <li><a href="#">Membership Application</a></li>
          <li><a href="#">Event Signup</a></li>
        </ul>
      </div>
      <div className="about-board">
        <h2>Current Board</h2>
        <BoardGrid members={currentBoard} />
        <h2 style={{marginTop: "2rem"}}>Past Boards</h2>
        <PastBoardsAccordion years={pastBoards} />
      </div>
      <div className="about-contact">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:tsa@virginia.edu">tsa@virginia.edu</a></p>
        <ContactForm postUrl="/api/contact" />
      </div>
      <div className="about-feedback">
        <h2>Feedback Form</h2>
        <p>We value your feedback! Please let us know your thoughts below.</p>
      </div>
      <div className="about-footer"></div>
    </>
  );
};

export default About;
