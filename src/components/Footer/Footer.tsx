import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Footer.css'; // Plain CSS (no CSS Modules)
import locationIcon from '../../assets/footer/icons8-location-48.png';
import mail from '../../assets/footer/icons8-mail-48.png';
import insta from '../../assets/footer/icons8-instagram-48.png';
import face from '../../assets/footer/icons8-facebook-48.png';
import link from '../../assets/footer/icons8-linkedin-48.png';




const Footer: React.FC = () => {
    return (
        <footer className="modern-footer pt-5">
            <div className="container footer-content">
                <div className="row g-4 mb-5">
                    {/* Company Info */}
                    <div className="col-lg-4 col-md-6">
                        <a href="#" className="footer-logo d-block mb-4">
                            TSA at UVA<span className="text-primary">.</span>
                        </a>
                        <p className="text-muted mb-4">
                            Taiwanese Student Association at the University of Virginia
                        </p>
                        <ul className="contact-info mb-4">
                            <li>
                                <img src={locationIcon} alt="Location" className="footer-icon me-2"/>
                                <span>Charlottesville, VA</span>
                            </li>
                            <li>
                                <img src={mail} alt="Email" className="footer-icon me-2"/>
                                <span>gxu6vn@virginia.edu</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-4 col-md-6">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="quick-links">
                            <li><Link to="/about">About TSA</Link></li>
                            <li>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSftSERM8_jiPzLZRzk6YRDPmnori-rrAtH-p7Octp12DV666Q/viewform?usp=dialog" target="_blank" rel="noreferrer">
                                    Feedback/Reporting
                                </a>
                            </li>
                            <li><Link to="/events">Events</Link></li>
                            <li>
                                <a href="https://docs.google.com/forms/d/1Es_WPwxx0FnvEDfbVy6pwEMEBuU39NpTwWwzkUNMaFA/edit?usp=drivesdk" target="_blank" rel="noreferrer">
                                    EZ Card Eats
                                </a>
                            </li>
                            <li><Link to="/partners">Partners</Link></li>
                            <li>
                                <a href="https://docs.google.com/forms/d/1uouf15PCENhuFF1DsOefIZFNq8-z2reEWTXgt0gUeYk/edit?usp=drivesdk" target="_blank" rel="noreferrer">
                                    Announcement Request
                                </a>
                            </li>
                            <li><Link to="/archive">Archive</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter + Social Icons */}
                    <div className="col-lg-4 col-md-12">
                        <h3 className="footer-title">Stay Connected</h3>
                        <p className="text-muted mb-4">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <form className="mb-4">
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control newsletter-input"
                                    placeholder="Your email address"
                                />
                            </div>
                            <button type="submit" className="btn btn-subscribe text-white w-100">
                                Subscribe Now
                            </button>
                        </form>
                        <div className="social-links">
                            <a href="https://www.facebook.com/groups/tsaatuva" className="social-icon" target="_blank"
                               rel="noreferrer">
                                <img src={face} alt="Facebook"/>
                            </a>
                            <a href="https://www.instagram.com/tsaatuva" className="social-icon" target="_blank"
                               rel="noreferrer">
                                <img src={insta} alt="Instagram"/>
                            </a>
                            <a href="https://www.linkedin.com/company/tsaatuva/" className="social-icon" target="_blank"
                               rel="noreferrer">
                                <img src={link} alt="LinkedIn"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row py-4">
                        <div className="col-md-6 text-center text-md-start">
                            <p>&copy; {new Date().getFullYear()} TSA at UVA. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p>
                            Made with love by TSA at UVA {/* add heart emoji*/}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
