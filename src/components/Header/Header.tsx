import { useEffect, useState } from "react";
import styles from "./Header.module.css";
const logo = require("../../assets/logo.png");

const Header = () => {
  const navItems = [
    "about",
    "events",
    "resources",
    "partners",
    "sponsors",
    "archive",
    "merch",
    "games",
  ];
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setShowNav(e.clientY < 120 && e.clientX > 1150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header className={styles.outerHeader}>
      <div className={styles.logoContainer}>
        <img
          src={logo}
          alt="TSA Logo"
          className={`${styles.logoImage} ${
            showNav ? styles.opaqueLogo : styles.transparentLogo
          }`}
        />
      </div>

      <div
        className={`${styles.headerContainer} ${!showNav ? styles.hidden : ""}`}
      >
        <nav className={styles.navGroup}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
