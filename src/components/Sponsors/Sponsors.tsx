import React, { useEffect, useState } from "react";
import styles from "./Sponsors.module.css";

import sponsor1 from "../../assets/sponsors/yunhai.png";
import sponsor2 from "../../assets/sponsors/run.png";
import sponsor3 from "../../assets/sponsors/teas.png";
import sponsor4 from "../../assets/sponsors/mochiko.png";
import sponsor5 from "../../assets/sponsors/boylan.png";

import logo from "../../assets/logo.png";

const Sponsors: React.FC = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        window.scrollTo(0, 0);

        // Small delay ensures browser paints initial hidden state
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.container} ${isReady ? styles.ready : ""}`}>
            <div className={styles.hero}>
                <img
                    src={logo}
                    alt="Logo"
                    className={styles.fadeItem}
                    style={{ "--order": 1 } as React.CSSProperties}
                />

                <h1
                    className={styles.fadeItem}
                    style={{ "--order": 2 } as React.CSSProperties}
                >
                    Empowering Students, Celebrating Culture: <br />
                    <span className={styles.highlight}>
                        TSA Night Market
                    </span>
                </h1>

                <p
                    className={styles.fadeItem}
                    style={{ "--order": 3 } as React.CSSProperties}
                >
                    Sponsor us to reach a vibrant community, showcase your brand,
                    and support student creativity.
                </p>

                <div
                    className={styles.fadeItem}
                    style={{ "--order": 4 } as React.CSSProperties}
                >
                    <div className={styles.buttons}>
                        <a
                            href="mailto:gxu6vn@virginia.edu?subject=Become%20a%20Sponsor"
                            className={styles.primaryBtn}
                        >
                            Become a Sponsor
                        </a>

                        <a
                            href="/SponsorsAssets/TSA%20NM%202026%20Sponsorship%20Packet.pdf"
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div
                className={styles.fadeItem}
                style={{ "--order": 5 } as React.CSSProperties}
            >
                <div className={styles.trusted}>
                    <p>Trusted by sponsors such as</p>

                    <div className={styles.logos}>
                        <img src={sponsor1} alt="yunhai" />
                        <img src={sponsor2} alt="ragged mountain running shop" />
                        <img src={sponsor3} alt="teas n you" />
                        <img src={sponsor4} alt="mochiko" />
                        <img src={sponsor5} alt="boylan heights" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;