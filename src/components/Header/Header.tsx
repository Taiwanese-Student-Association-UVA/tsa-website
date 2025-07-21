import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const logo = require("../../assets/logo.png");

const Header = () => {
  const navItems = [
    "about",
    "events",
    "Resources",
    "partners",
    "sponsors",
    "archive",
    "merch",
    "games",
  ];
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setShowNav(e.clientY < 120 && e.clientX > 925);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
      <header className={styles.outerHeader}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img
            src={logo}
            alt="TSA Logo"
            className={`${styles.logoImage} ${
              showNav ? styles.opaqueLogo : styles.transparentLogo
            }`}
          />
        </Link>
      </div>

        <div className={`${styles.headerContainer} ${!showNav ? styles.hidden : ""}`}>
          <nav className={styles.navGroup}>
            {navItems.map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`}>
                  {item}
                </Link>
            ))}
          </nav>
        </div>
      </header>
  );
};

export default Header;
