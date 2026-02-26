import React from 'react';
import './styles/Footer.css';
import { FaLocationDot } from 'react-icons/fa6';
import { LuPhone } from 'react-icons/lu';
import { IoMdChatbubbles } from 'react-icons/io';
import { FaArrowRight, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';

const Footer = () => {
    return (
        <div className="rts-footer-area-two">
            <div className="container-2">
                <div className="row">
                    <div className="coll-lg-12">
                        <div className="footer-two-main-wrapper">
                            {/* Logo + Newsletter */}
                            <div className="footer-single-wixed-two start">
                                <a className="logo-area" href="#">
                                    <img src="/assets/images/logo/logo-02.svg" alt="logo-area" className="logo" />
                                </a>
                                <p className="disc">What's inside: New Arrivals, Exclusive Sales, News &amp; Mores</p>
                                <form action="#" onSubmit={(e) => e.preventDefault()}>
                                    <input type="email" placeholder="Email Address" />
                                    
                                </form>
                                <div className="social-style-dash">
                                    <ul>
                                        <li><a href="#"><FaFacebookF /></a></li>
                                        <li><FaTwitter /></li>
                                        <li><CiInstagram /></li>
                                        <li><FaLinkedinIn /></li>
                                        <li><FaYoutube /></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Our Stores */}
                            <div className="single-footer-wized mid">
                                <h3 className="footer-title">Our Stores</h3>
                                <div className="footer-nav">
                                    <ul>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Support Center</a></li>
                                        <li><a href="#">Careers</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Shop Categories */}
                            <div className="single-footer-wized mid">
                                <h3 className="footer-title">Shop Categories</h3>
                                <div className="footer-nav">
                                    <ul>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Information</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Nest Stories</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="single-footer-wized">
                                <h3 className="footer-title">Need Help? / Contact Us</h3>
                                <div className="contact-information">
                                    <div className="single-contact-information-area">
                                        <div className="icon-area">
                                            <FaLocationDot className='text-lime-500 text-4xl' />
                                        </div>
                                        <div className="information-area">
                                            <p className="disc">258 Daniel Street, 2589 Phones Line <br />Berlin, Germany</p>
                                        </div>
                                    </div>
                                    <div className="single-contact-information-area">
                                        <div className="icon-area">
                                            <LuPhone className='text-lime-500 text-4xl' />
                                        </div>
                                        <div className="information-area">
                                            <p className="disc">Call us between 8:00 AM - 12PM <br /><a href="#">+25896 3158 3228</a></p>
                                        </div>
                                    </div>
                                    <div className="single-contact-information-area">
                                        <div className="icon-area">
                                          <IoMdChatbubbles className='text-lime-500 text-4xl' />
                                        </div>
                                        <div className="information-area">
                                            <p className="disc">Live Chat <br /><span>Chat With an Experts</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
