import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/HeaderNavBar.css';
import { FaLocationDot } from 'react-icons/fa6';

const HeaderNavBar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`rts-header-nav-area-one header--sticky ${isSticky ? 'sticky' : ''}`}>
            <div className="container-2">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="nav-and-btn-wrapper">
                            <div className="nav-area">
                                <div>
                                    <nav>
                                        <ul className="parent-nav">
                                            <li className="parent has-dropdown">
                                                <a className="nav-link" href="#">Home</a>
                                                <ul className="submenu">
                                                    <li><Link className="sub-b" to="/">Home One</Link></li>
                                                    <li><a className="sub-b" href="#">Home Two</a></li>
                                                    <li><a className="sub-b" href="#">Home Three</a></li>
                                                    <li><a className="sub-b" href="#">Home Four</a></li>
                                                    <li><a className="sub-b" href="#">Home Five</a></li>
                                                </ul>
                                            </li>
                                            <li className="parent"><Link to="/about">About</Link></li>
                                            <li className="parent with-megamenu">
                                                <a href="#">Shop</a>
                                                <div className="rts-megamenu">
                                                    <div className="wrapper">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-8">
                                                                <div className="megamenu-item-wrapper">
                                                                    <div className="single-megamenu-wrapper">
                                                                        <p className="title">Shop Layout</p>
                                                                        <ul>
                                                                            <li><Link to="/shop">Shop Grid Sidebar</Link></li>
                                                                            <li><a href="#">Shop List Sidebar</a></li>
                                                                            <li><a href="#">Shop Top Filter Grid</a></li>
                                                                            <li><a href="#">Shop Top Filter List</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="single-megamenu-wrapper">
                                                                        <p className="title">Shop Details</p>
                                                                        <ul>
                                                                            <li><a className="sub-b" href="#">Shop Details</a></li>
                                                                            <li><a className="sub-b" href="#">Shop Details V2</a></li>
                                                                            <li><a className="sub-b" href="#">Shop Details V3</a></li>
                                                                            <li><a className="sub-b" href="#">Shop Details V4</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="single-megamenu-wrapper">
                                                                        <p className="title">Product Feature</p>
                                                                        <ul>
                                                                            <li><a className="sub-b" href="#">Variable product</a></li>
                                                                            <li><a className="sub-b" href="#">Affiliate product</a></li>
                                                                            <li><a className="sub-b" href="#">Shop Compare</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="single-megamenu-wrapper">
                                                                        <p className="title">Shop Others</p>
                                                                        <ul>
                                                                            <li><a className="sub-b" href="#">Cart</a></li>
                                                                            <li><a className="sub-b" href="#">Checkout</a></li>
                                                                            <li><a className="sub-b" href="#">Track Order</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <Link className="feature-add-megamenu-area" to="/shop">
                                                                    <img src="/assets/images/feature/05.jpg" alt="feature_product" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="parent has-dropdown">
                                                <a className="nav-link" href="#">Vendors</a>
                                                <ul className="submenu">
                                                    <li><a className="sub-b" href="#">Vendor List</a></li>
                                                    <li><a className="sub-b" href="#">Vendor Grid</a></li>
                                                    <li><a className="sub-b" href="#">Vendor Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="parent has-dropdown">
                                                <a className="nav-link" href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li><a className="sub-b" href="#">Dashboard<span className="badge">( New )</span></a></li>
                                                    <li><Link className="sub-b" >About</Link></li>
                                                    <li><a className="sub-b" href="#">Store</a></li>
                                                    <li><a className="sub-b" href="#">Invoice</a></li>
                                                    <li><Link className="sub-b" >Contact</Link></li>
                                                    <li><a className="sub-b" >Register</a></li>
                                                    <li><a className="sub-b" href="#">Login</a></li>
                                                    <li><a className="sub-b" href="#">Privacy Policy</a></li>
                                                    <li><a className="sub-b" href="#">Cookies Policy</a></li>
                                                    <li><a className="sub-b" href="#">Terms &amp; Condition</a></li>
                                                </ul>
                                            </li>
                                            <li className="parent has-dropdown">
                                                <a className="nav-link" href="#">Blog</a>
                                                <ul className="submenu">
                                                    <li><a className="sub-b">Blog</a></li>
                                                    <li><a className="sub-b">Blog List Left Sidebar</a></li>
                                                    <li><a className="sub-b" >Blog List Right Sidebar</a></li>
                                                    <li><a className="sub-b" >Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="parents">
                                                <a target="_blank" href="#">Dashboard<span className="badge">New</span></a>
                                            </li>
                                            <li className="parent"><Link >Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="right-location-area">
                             <FaLocationDot className='text-white text-3xl' />
                                <p>Delivery: <a href="#">258 FKD Street, Berlin</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderNavBar;
