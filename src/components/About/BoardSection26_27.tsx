import React, { useState } from "react";
import "./about.css";

type Person = { name: string; role: string; photo: string };

const execBoard: Person[] = [
  { name: "Catherine Cheng", role: "President", photo: "/assets/board/ashley.jpg" },
  { name: "Ryan Fang", role: "Vice President", photo: "/assets/board/albany.jpg" },
  { name: "Natalie Nguyen", role: "Secretary", photo: "/assets/board/mckenzie.jpg" },
  { name: "Michael Lusk", role: "Treasurer", photo: "/assets/board/hebba.jpg" },
];

const groupedBoard: Record<string, Person[]> = {
  Membership: [
    { name: "Melody Yuan", role: "Membership", photo: "/assets/board/linda.jpg" },
    { name: "Irshia Narmin", role: "Membership", photo: "/assets/board/natalie.jpg" },
  ],
  Social: [
    { name: "Evan Zheng", role: "Social", photo: "/assets/board/mridula.jpg" },
    { name: "Love Li", role: "Social", photo: "/assets/board/matthew.jpg" },
  ],
  Culinary: [
    { name: "Virginia Zhang", role: "Culinary", photo: "/assets/board/nolan.jpg" },
    { name: "Katherine Ku", role: "Culinary", photo: "/assets/board/britney.jpg" },
    { name: "Maxienne Arlanza", role: "Culinary", photo: "/assets/board/tina.jpg" },
    { name: "Albert Yorn", role: "Culinary", photo: "/assets/board/emily.jpg" },
  ],
  Historian: [
    { name: "Linda Le", role: "Historian", photo: "/assets/board/nolan.jpg" },
    { name: "Tiffany Bian", role: "Historian", photo: "/assets/board/angelina.jpg" },
  ],
  Sports: [
    { name: "Jun Ip", role: "Sports", photo: "/assets/board/nathaly.jpg" },
    { name: "George Kamberis", role: "Sports", photo: "/assets/board/robert.jpg" },
  ],
  Publicity: [
    { name: "Anna Nguyen", role: "Publicity", photo: "/assets/board/ashley2.jpg" },
    { name: "Alonna Nguyen", role: "Publicity", photo: "/assets/board/oanh.jpg" },
    { name: "Anya Huang", role: "Publicity", photo: "/assets/board/anna.jpg" },
  ],
  Culture: [
    { name: "Sharlene Chiang", role: "Culture", photo: "/assets/board/jenny.jpg" },
    { name: "Angela Chen", role: "Culture", photo: "/assets/board/catherine.jpg" },
  ],
  Fundraising: [
    { name: "Lani Le", role: "Fundraising", photo: "/assets/board/kerstin.jpg" },
    { name: "Mindy Tran", role: "Fundraising", photo: "/assets/board/cedric.jpg" },
  ],
  Webmaster: [
    { name: "Kai-Tang Tseng", role: "Webmaster", photo: "/assets/board/joyce.jpg" },
    { name: "Hebba Mohmand", role: "Webmaster", photo: "/assets/board/norah.jpg" },
  ],
  Advisor: [
    { name: "Raymond Wen", role: "Advisor", photo: "/assets/board/raymond.jpg" },
    { name: "Emily Huo", role: "Advisor", photo: "/assets/board/hannah.jpg" },
    { name: "Linda Tol", role: "Advisor", photo: "/assets/board/victoria.jpg" },
    { name: "Matthew Nguyen", role: "Advisor", photo: "/assets/board/caroline.jpg" },
  ],
};

const BoardSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="galleryRow">
        {execBoard.map((m) => (
          <article key={m.name} className="galleryCard personCard">
            <div className="personText">
              <div className="personName">{m.name}</div>
              <div className="personRole">{m.role}</div>
            </div>
          </article>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
        <button
          className="btnWide"
          onClick={() => setExpanded((s) => !s)}
          aria-expanded={expanded}
          aria-controls="board-more"
        >
          {expanded ? "View Less" : "View More"}
        </button>
      </div>

      {expanded && (
        <div id="board-more" className="boardGroups">
          {Object.entries(groupedBoard).map(([group, people]) => (
            <section key={group} className="groupBlock">
              <h3 className="groupTitle">{group}</h3>
              <div className="galleryRow">
                {people.map((p) => (
                  <article key={p.name} className="galleryCard personCard">
                    <div className="personText">
                      <div className="personName">{p.name}</div>
                      <div className="personRole">{p.role}</div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
};

export default BoardSection;