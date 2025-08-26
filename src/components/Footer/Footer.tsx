import { useState } from "react";
import styles from "./Footer.module.css";
import {
  IG,
  FB,
  LI,
  IGhover,
  FBhover,
  LIhover,
} from "../../assets/buttons/index";

const Footer = () => {
  const [instagramImg, setInstagramImg] = useState(IG);
  const [facebookImg, setFacebookImg] = useState(FB);
  const [linkedinImg, setLinkedinImg] = useState(LI);

  return (
    <div className={styles.footer}>
      <a
        href="https://www.instagram.com/tsaatuva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="blank"
        onMouseOver={() => setInstagramImg(IGhover)}
        onMouseOut={() => setInstagramImg(IG)}
      >
        <img src={instagramImg} alt="Button for the TSA Instagram account" />
      </a>
      <a
        href="https://www.facebook.com/groups/tsaatuva"
        target="blank"
        onMouseOver={() => setFacebookImg(FBhover)}
        onMouseOut={() => setFacebookImg(FB)}
      >
        <img src={facebookImg} alt="Button for the TSA Facebook account" />
      </a>
      <a
        href="https://www.linkedin.com/company/tsaatuva/"
        target="blank"
        onMouseOver={() => setLinkedinImg(LIhover)}
        onMouseOut={() => setLinkedinImg(LI)}
      >
        <img src={linkedinImg} alt="Button for the TSA LinkedIn account" />
      </a>
    </div>
  );
};

export default Footer;
