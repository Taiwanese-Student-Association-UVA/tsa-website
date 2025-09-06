import React from "react";
import styles from "./Sponsors.module.css";
import heroImg from "../../assets/sponsors/nm2.jpg";
import logo from "../../assets/logo.png";
// import packet from "../../assets/sponsors/TSA NM 2026 Sponsorship Packet.pdf;




const Sponsors: React.FC = () => {
    return (
        <div className={styles.page}>
            {/* Top Section */}
            <section
                className={styles.hero}
                style={{backgroundImage: `url(${heroImg})`}}
            >
                <div className={styles.heroLogo} aria-label="TSA watermark">
                    <span className={styles.heroLogoText}>TSA</span>
                    <img src={logo} alt="TSA logo" className={styles.heroLogoImg}/>
                </div>
            </section>


            {/* Why Sponsor */}
            <section className={styles.section}>
                <div className={styles.twoCol}>
                    <div>
                        <h2>Why Sponsor?</h2>
                        <p>
                            Your support helps us keep Night Market free and accessible for
                            over 500 attendees, while celebrating Taiwanese culture through
                            food, games, and live performances.
                        </p>
                    </div>
                    <div className={styles.metrics}>
                        <div className={styles.metric}>
                            <span className={styles.metricNum}>500+</span>
                            <span>Attendees</span>
                        </div>
                        <div className={styles.metric}>
                            <span className={styles.metricNum}>10+</span>
                            <span>Cultural Groups</span>
                        </div>
                        <div className={styles.metric}>
                            <span className={styles.metricNum}>1</span>
                            <span>Unforgettable Night</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsorship Benefits */}
            <section className={styles.section}>
                <h2>Sponsorship Benefits</h2>
                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <h3>Recognition</h3>
                        <p>
                            Logos featured on posters, signage, and live acknowledgments
                            throughout Night Market.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Engagement</h3>
                        <p>
                            Complimentary tabling, inclusion in giveaways, and personalized
                            social media shoutouts.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Appreciation</h3>
                        <p>
                            Handwritten thank-you card and a post-event recap highlighting
                            your impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Night Market Recap */}
            <section className={styles.section}>
                <h2>Night Market Highlights</h2>
                <div className={styles.photoGrid}>
                    <div className={styles.photoBox}>Food</div>
                    <div className={styles.photoBox}>Performances</div>
                    <div className={styles.photoBox}>Games</div>
                    <div className={styles.photoBox}>Crowds</div>
                </div>
            </section>

            {/* Call to Action */}
            <section className={styles.ctaSection}>
                <h2>Ready to Sponsor?</h2>
                <p>
                    Partner with TSA to celebrate Taiwanese culture and connect with a
                    diverse and engaged community.
                </p>
                <a href="mailto:gxu6vn@virginia.edu" className={styles.cta}>
                    Become a Sponsor
                </a>
            </section>
        </div>
    );
};

export default Sponsors;
