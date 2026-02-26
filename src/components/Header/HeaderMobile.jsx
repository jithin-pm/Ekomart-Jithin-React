import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiMenu } from 'react-icons/fi';
import './styles/HeaderMobile.css';

const HeaderMobile = ({ setIsOpen }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`header-mobile-area ${isSticky ? 'sticky' : ''}`}>
            <div className="container">
                <div className="header-mobile-wrapper">
                    <Link to="/" className="logo-area">
                        <img src="/assets/images/logo/logo-01.svg" alt="logo" />
                    </Link>
                    <div className="header-right">
                        <div className="mobile-action-item">
                            <FiShoppingCart />
                        </div>
                        <div className="mobile-action-item">
                            <FiSearch />
                        </div>
                        <div className="mobile-action-item menu-btn" onClick={() => setIsOpen(true)}>
                            <FiMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMobile;
