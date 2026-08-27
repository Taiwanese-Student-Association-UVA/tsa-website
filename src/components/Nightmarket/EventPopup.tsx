import React, { useState } from "react";
import { Link } from "react-router-dom";

import taipeiIcon from "../../assets/fams/taipei.png";
import tainanIcon from "../../assets/fams/tainan.png";
import taichungIcon from "../../assets/fams/taichung.png";

import "./EventPopup.css";

export const EventPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="eventPopup">
      <button
        className="closeButton"
        aria-label="Close sorting quiz popup"
        onClick={() => setIsOpen(false)}
      >
        ×
      </button>

      <div className="popupContent">
        <p className="popupEyebrow">TSA AT UVA</p>

        <h2 className="popupTitle">
          Which TSA Fam Are You?
        </h2>

        <div className="popupFamImages">
          <img src={taipeiIcon} alt="Taipei Fam" />
          <img src={tainanIcon} alt="Tainan Fam" />
          <img src={taichungIcon} alt="Taichung Fam" />
        </div>

        <p className="popupDescription">
          Take our sorting quiz and find out which fam matches your vibe.
        </p>

        <Link
          to="/sorting-quiz"
          className="popupButton"
          onClick={() => setIsOpen(false)}
        >
          Find Your Fam →
        </Link>
      </div>
    </div>
  );
};