import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu, FiPlus } from 'react-icons/fi';
import { TbGitCompare } from "react-icons/tb";
import { FaAppleAlt, FaFish, FaBreadSlice, FaFirstAid, FaIceCream, FaShoppingBag, FaInfoCircle, FaSearch } from 'react-icons/fa';
import { GiFrenchFries, GiCupcake, GiCookie } from 'react-icons/gi';
// component-specific styles
import './styles/headersearchbar.css';

const categories = [
    { icon: <FaAppleAlt className="category-icon" />, name: 'Breakfast & Dairy', hasSubmenu: true },
    { icon: <FaFish className="category-icon" />, name: 'Meats & Seafood', hasSubmenu: true },
    { icon: <FaBreadSlice className="category-icon" />, name: 'Breads & Bakery', hasSubmenu: false },
    { icon: <GiFrenchFries className="category-icon" />, name: 'Chips & Snacks', hasSubmenu: true },
    { icon: <FaFirstAid className="category-icon" />, name: 'Medical Healthcare', hasSubmenu: false },
    { icon: <GiCupcake className="category-icon" />, name: 'Breads & Bakery', hasSubmenu: false },
    { icon: <GiCookie className="category-icon" />, name: 'Biscuits & Snacks', hasSubmenu: true },
    { icon: <FaIceCream className="category-icon" />, name: 'Frozen Foods', hasSubmenu: false },
    { icon: <FaShoppingBag className="category-icon" />, name: 'Grocery & Staples', hasSubmenu: false },
    { icon: <FaInfoCircle className="category-icon" />, name: 'Other Items', hasSubmenu: false },
];

const HeaderSearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="search-header-area-main bg_primary">
            <div className="container-2">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="logo-search-category-wrapper">
                            <div className="logo-area" to="/">
                                <img src="/assets/images/logo/logo-02.svg" alt="logo-main" className="logo" />
                            </div>
                            <div className="category-search-wrapper">
                                <div className="category-btn category-hover-header">
                                    <FiMenu className="parent text-2xl mr-2" />
                                    <span>Categories</span>
                                    <div>
                                        <ul className="category-sub-menu" id="category-active-four">
                                            {categories.map((cat, index) => (
                                                <li key={index}>
                                                    <a className="menu-item" href="#">
                                                        {cat.icon}
                                                        <span style={{ marginRight: 'auto' }}>{cat.name}</span>
                                                        {cat.hasSubmenu && <i className="fa-regular fa-plus"></i>}
                                                    </a>
                                                    {cat.hasSubmenu && (
                                                        <ul className="submenu mm-collapse">
                                                            <li><a className="mobile-menu-link" >Breakfast</a></li>
                                                            <li><a className="mobile-menu-link" >Dinner</a></li>
                                                            <li><a className="mobile-menu-link" >Pumking</a></li>
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <form className="search-header" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        placeholder="Search for products, categories or brands"
                                        required
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button type="submit" className="rts-btn btn-primary radious-sm with-icon">
                                        <div className="btn-text">Search</div>
                                       <FaSearch />
                                       
                                    </button>
                                </form>
                            </div>
                            <div className="accont-wishlist-cart-area-header">
                                <div className="btn-border-only account" to="/account">
                                    <FiUser className="mr-2" style={{ marginRight: '8px' }} />Account
                                </div>
                                <a className="btn-border-only account compare-number" href="#">
                                    <TbGitCompare style={{ marginRight: '8px' }} />
                                    <span className="number">0</span>
                                </a>
                                <div className="btn-border-only cart category-hover-header">
                                    <FiHeart />
                                    <span className="text">Wishlist</span>
                                    <span className="number">0</span>

                                </div>
                                <div className="btn-border-only cart category-hover-header">
                                    <FiShoppingCart />
                                    <span className="text">Cart</span>
                                    <span className="number">0</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSearchBar;
