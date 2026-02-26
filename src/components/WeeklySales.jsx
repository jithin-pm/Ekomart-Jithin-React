import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/WeeklySales.css';
import { FaCartPlus, FaEye, FaStar } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { IoMdRepeat } from 'react-icons/io';

const salesProducts1 = [
    { id: 1, image: '19.jpg', title: 'Details business makes your profit', price: '$90.00', oldPrice: '$36.00' },
    { id: 2, image: '22.jpg', title: 'Profitable business makes your profit', price: '$30.00', oldPrice: '$36.00' },
    { id: 3, image: '23.jpg', title: 'Valuable business makes your profit', price: '$16.00', oldPrice: '$36.00' },
    { id: 4, image: '20.jpg', title: 'Firebase business makes your profit', price: '$50.00', oldPrice: '$36.00' },
    { id: 5, image: '21.jpg', title: 'Netlyfy business makes your profit', price: '$19.00', oldPrice: '$36.00' },
    { id: 6, image: '20.jpg', title: 'Firebase business makes your profit', price: '$50.00', oldPrice: '$36.00' },
    { id: 7, image: '23.jpg', title: 'Valuable business makes your profit', price: '$16.00', oldPrice: '$36.00' },
    { id: 8, image: '24.jpg', title: 'System business makes your profit', price: '$15.00', oldPrice: '$36.00' },
];

const salesProducts2 = [
    { id: 1, image: '20.jpg', title: 'Firebase business makes your profit', price: '$50.00', oldPrice: '$36.00' },
    { id: 2, image: '21.jpg', title: 'Netlyfy business makes your profit', price: '$19.00', oldPrice: '$36.00' },
    { id: 3, image: '19.jpg', title: 'Details business makes your profit', price: '$90.00', oldPrice: '$36.00' },
    { id: 4, image: '22.jpg', title: 'Profitable business makes your profit', price: '$30.00', oldPrice: '$36.00' },
    { id: 5, image: '23.jpg', title: 'Valuable business makes your profit', price: '$16.00', oldPrice: '$36.00' },
];

const tabs1 = ['All', 'Frozen Foods', 'Diet Foods', 'Healthy Foods', 'Vitamin Items'];
const tabs2 = ['All', 'Baking material', 'Milks & Dairies', 'Vagetable'];

const ProductCard = ({ product }) => (
    <div className="col-lg-20 col-md-4 col-sm-6 col-12">
        <div className="single-shopping-card-one deals-of-day">
            <div className="onsale-offer"><span>On sale</span></div>
            <div className="image-and-action-area-wrapper">
                <Link className="thumbnail-preview" to="/">
                    <img src={`/assets/images/grocery/${product.image}`} alt="grocery" />
                </Link>
                <div className="action-share-option">
                    <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                        <CiHeart className='text-3xl' />
                    </div>
                    <div className="single-action openuptip" data-flow="up" title="Compare">
                        <IoMdRepeat className='text-3xl' />
                    </div>
                    <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                        <FaEye className='text-3xl' />
                    </div>
                </div>
            </div>
            <div className="body-content">
                <div className="start-area-rating">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className='text-amber-400' />)}
                </div>
                <Link to="/"><h4 className="title">{product.title}</h4></Link>
                <span className="availability">500g Pack</span>
                <div className="price-area">
                    <span className="current">{product.price}</span>
                    <div className="previous">{product.oldPrice}</div>
                </div>
                <div className="cart-counter-action">
                    <Link className="rts-btn btn-primary add-to-card radious-sm with-icon" to="/">
                        <div className="btn-text">Add</div>

                        <div className="arrow-icon"><FaCartPlus className='text-3xl text-white' /></div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

const WeeklySales = () => {
    const [activeTab1, setActiveTab1] = useState(0);
    const [activeTab2, setActiveTab2] = useState(0);

    return (
        <>
            {/* Weekly Sales Section 1 */}
            <div className="popular-product-weekly-seller-item rts-section-gapTop">
                <div className="container-2 rts-section-gapBottom single-new-offer-area-border-weekly-selstyle bg_light-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left mb--0">Weekly Best Selling Products</h2>
                                <ul className="nav nav-tabs" id="weeklySalesTabs1" role="tablist">
                                    {tabs1.map((tab, index) => (
                                        <li className="nav-item" role="presentation" key={index}>
                                            <button
                                                className={`nav-link ${activeTab1 === index ? 'active' : ''}`}
                                                onClick={() => setActiveTab1(index)}
                                            >
                                                {tab}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                {salesProducts1.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Weekly Sales Section 2 */}
            <div className="popular-product-weekly-seller-item rts-section-gapTop">
                <div className="container-2 rts-section-gapBottom single-new-offer-area-border-weekly-selstyle bg_light-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left mb--0">Don't miss this week's sales</h2>
                                <ul className="nav nav-tabs" id="weeklySalesTabs2" role="tablist">
                                    {tabs2.map((tab, index) => (
                                        <li className="nav-item" role="presentation" key={index}>
                                            <button
                                                className={`nav-link ${activeTab2 === index ? 'active' : ''}`}
                                                onClick={() => setActiveTab2(index)}
                                            >
                                                {tab}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                {salesProducts2.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeeklySales;
