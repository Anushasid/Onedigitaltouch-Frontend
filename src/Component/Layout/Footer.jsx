import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="py-3 bg-teal text-white">
            <div className="container mt-2">
                <div className="row">
                    {/* One Billing Section */}
                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                        <h6 className="text-uppercase">One Billing</h6>
                        <p style={{ fontSize: '0.9rem' }}>
                            To provide a single interface for anytime, anywhere citizen-centric services of the government and private businesses in an integrated, convenient, fair, effective, secure, sustainable, and citizen-friendly manner.
                        </p>
                    </div>

                    {/* About Us Section */}
                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                        <h6 className="text-uppercase">About Us</h6>
                        <ul className="list-unstyled mb-0">
                            <li><a href="/" className="footer-link">Home Page</a></li>
                            <li><a href="/services" className="footer-link">Services Offered</a></li>
                            <li><a href="/contact" className="footer-link">Contact Us</a></li>
                            <li><a href="/feedback" className="footer-link">Feedback</a></li>
                        </ul>
                    </div>

                    {/* Other Pages Section */}
                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                        <h6 className="text-uppercase">Other Pages</h6>
                        <ul className="list-unstyled mb-0">
                            <li><a href="/Signup" className="footer-link">Sign Up</a></li>
                            <li><a href="/Contact" className="footer-link">Help</a></li>
                            <li><a href="/Locations" className="footer-link">Map</a></li>
                            <li><a href="/Notifications" className="footer-link">Notifications</a></li>
                            <li><a href="/websitepolicy" className="footer-link">Website Policies</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                        <h6 className="text-uppercase">Direct Contact</h6>
                        <ul className="list-unstyled mb-0" style={{ fontSize: '0.9rem' }}>
                            <li>Hubli-Dharwad, Karnataka</li>
                            <li>0836-2213888/2213869/2213886/2213889</li>
                            <li>DC Office Dharwad</li>
                            <li>0836-2233840</li>
                            <li><a href="mailto:anushasid9900@gmail.com" className="footer-link">anushasid9900@gmail.com</a></li>
                        </ul>
                        <div className="mt-2 social-icons">
                            <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-google-play"></i></a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="row mt-2">
                    <div className="col text-center">
                        <p className="text-white mb-1" style={{ fontSize: '0.9rem' }}>Our website is best viewed in:</p>
                        <div className="d-flex justify-content-center mt-1">
                            <i className="fab fa-chrome me-2 text-white" style={{ fontSize: '20px' }}></i>
                            <i className="fab fa-firefox me-2 text-white" style={{ fontSize: '20px' }}></i>
                            <i className="fab fa-edge me-2 text-white" style={{ fontSize: '20px' }}></i>
                            <i className="fab fa-opera text-white" style={{ fontSize: '20px' }}></i>
                        </div>
                        <p className="text-white mt-2" style={{ fontSize: '0.9rem' }}>Last reviewed and updated on 18 Aug, 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
