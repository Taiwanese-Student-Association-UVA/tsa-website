import React, { useEffect, useState } from "react";
import styles from "./Sponsors.module.css";

import sponsor1 from "../../assets/sponsors/yunhai.png";
import sponsor2 from "../../assets/sponsors/run.png";
import sponsor3 from "../../assets/sponsors/teas.png";
import sponsor4 from "../../assets/sponsors/mochiko.png";
import sponsor5 from "../../assets/sponsors/boylan.png";
import sponsor6 from "../../assets/sponsors/11.png";
import sponsor7 from "../../assets/sponsors/12.png";
import sponsor8 from "../../assets/sponsors/13.png";
import sponsor9 from "../../assets/sponsors/14.png";
import sponsor10 from "../../assets/sponsors/21.png";
import sponsor11 from "../../assets/sponsors/22.png";
import sponsor12 from "../../assets/sponsors/23.png";

import logo from "../../assets/logo.png";

const Sponsors: React.FC = () => {
    const [isReady, setIsReady] = useState(false);
    const [page, setPage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            setIsReady(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    const sponsorPages = [
        [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5],
        [sponsor10, sponsor11, sponsor12],
        [sponsor6, sponsor7],
        [sponsor8, sponsor9],
    ];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setPage((prev) => prev + 1);
        }, 2500); // change auto scroll speed

        return () => clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        if (!isTransitioning) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            });
        }
    }, [isTransitioning]);

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
                style={{"--order": 5} as React.CSSProperties}
            >
                <div
                    className={styles.trusted}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <p>Trusted by sponsors such as</p>

                    <div className={styles.sliderWrapper}>
                        <div
                            className={styles.sliderTrack}
                            style={{
                                transform: `translateX(-${page * 100}%)`,
                                transition: isTransitioning
                                    ? "transform 1s cubic-bezier(0.65, 0, 0.35, 1)"
                                    : "none",
                            }}
                            onTransitionEnd={() => {
                                if (page === sponsorPages.length) {
                                    setIsTransitioning(false);
                                    setPage(0);
                                }
                            }}
                        >
                            {[...sponsorPages, sponsorPages[0]].map((group, groupIndex) => (
                                <div key={groupIndex} className={styles.slide}>
                                    {group.map((logo, index) => (
                                        <img key={index} src={logo} alt={`Sponsor ${index}`}/>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;