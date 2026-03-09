import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./Header.module.css";

const logo = require("../../assets/logo.png");

const Header = () => {
  const navItems = [
    "home",
    "about",
    "events",
    "partners",
    "sponsors",
    "archive",
  ];

  const controls = useAnimation();
  const hasHovered = useRef(false);

  const playAnimation = async () => {
    await controls.start({
      rotate: [0, -14, 14, -10, 10, -6, 6, -4, 4, -2, 2, 0],
      filter: [
        "drop-shadow(0 0 0px rgba(0,0,0,0))",
        "drop-shadow(0 0 14px rgba(0,0,0,0.6))",
        "drop-shadow(0 0 14px rgba(0,0,0,0.6))",
        "drop-shadow(0 0 14px rgba(0,0,0,0.6))",
        "drop-shadow(0 0 0px rgba(0,0,0,0))",
      ],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    });

    controls.set({ rotate: 0 });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasHovered.current) {
        playAnimation();
      }
    }, 1800);

    const interval = setInterval(() => {
      if (!hasHovered.current) {
        playAnimation();
      }
    }, 12000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
      <header className={styles.outerHeader}>
        <div
            className={styles.hoverWrapper}
            onMouseEnter={() => {
              hasHovered.current = true;
            }}
        >
          <div className={styles.logoContainer}>
            <Link to="/">
              <motion.div animate={controls}>
                <img
                    src={logo}
                    alt="TSA Logo"
                    className={styles.logoImage}
                />
              </motion.div>
            </Link>
          </div>

          <div className={`${styles.headerContainer} ${styles.hidden}`}>
            <nav className={styles.navGroup}>
              {navItems.map((item) => (
                  <Link
                      key={item}
                      to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
  );
};

export default Header;