import React from "react";
import styles from "./Sponsors.module.css";
import sponsor1 from "../../assets/sponsors/Meta-Logo.jpg";
import logo from "../../assets/logo.png";

const Sponsors: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <img src={logo} alt="Logo" className={styles.logo} style={{ '--order': 1 } as React.CSSProperties} />

                <h1 className={styles.title} style={{'--order': 2} as React.CSSProperties}>
                    Empowering Students, Celebrating Culture: <br />
                    <span className={styles.highlight} style={{'--order': 0} as React.CSSProperties}>TSA Night Market</span>
                </h1>

                <p className={styles.subtitle} style={{'--order': 3 } as React.CSSProperties}>
                    Partner with us to reach a vibrant community, showcase your brand, and support student creativity.
                </p>

                <div className={styles.buttons} style={{ '--order': 4 } as React.CSSProperties}>
                    <a href="/contact" className={styles.primaryBtn}>
                        Become a Sponsor
                    </a>
                    <a href="/SponsorsAssets/TSA%20NM%202026%20Sponsorship%20Packet.pdf"
                       className={styles.secondaryBtn}
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        View Sponsorship Packet
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className={styles.arrowIcon}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Trusted By Section */}
            <div className={styles.trusted} style={{ '--order': 5 } as React.CSSProperties}>
                <p>Trusted by sponsors such as</p>
                <div className={styles.logos}>
                    <img src={sponsor1} alt="Sponsor Example"/>
                    <img src={sponsor1} alt="Sponsor Example"/>
                    <img src={sponsor1} alt="Sponsor Example"/>
                    <img src={sponsor1} alt="Sponsor Example"/>
                    <img src={sponsor1} alt="Sponsor Example"/>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
