import React, { useState } from 'react';
import './styles/PopularProducts.css';
import { CiHeart } from 'react-icons/ci';
import { IoMdRepeat } from 'react-icons/io';
import { FaBookmark, FaCartPlus, FaEye } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const productData = [
    { id: 1, image: '01.jpg', badge: '25% Off', title: 'Dalivaring business makes your profit', weight: '500g Pack', price: '$63.00', oldPrice: '$36.00' },
    { id: 2, image: '20.jpg', badge: '25% Off', title: 'Firebase business makes your profit', weight: '500g Pack', price: '$50.00', oldPrice: '$36.00' },
    { id: 3, image: '21.jpg', badge: '25% Off', title: 'Netlyfy business makes your profit', weight: '500g Pack', price: '$19.00', oldPrice: '$36.00' },
    { id: 4, image: '19.jpg', badge: '25% Off', title: 'Details business makes your profit', weight: '500g Pack', price: '$90.00', oldPrice: '$36.00' },
];

const tabs = ['Frozen Foods', 'Diet Foods', 'Healthy Foods', 'Vitamin Items'];

const PopularProducts = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="popular-product-area rts-section-gap bg_light-1">
            <div className="container-2">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area-between">
                            <h2 className="title-left mb--0">Popular Products</h2>
                            <ul className="nav nav-tabs" id="popularTabs" role="tablist">
                                {tabs.map((tab, index) => (
                                    <li className="nav-item" role="presentation" key={index}>
                                        <button
                                            className={`nav-link ${activeTab === index ? 'active' : ''}`}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {tab}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt--20">
                    <div className="col-lg-12">
                        <div className="row g-4">
                            {productData.map((product) => (
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={product.id}>
                                    <div className="single-shopping-card-one popular-product-card">
                                        <div className="image-and-action-area-wrapper">
                                            <div className="thumbnail-preview">
                                                <div className="badge">
                                                    <span className='-mt-6 -px-6 font-bolder'>25% <br />Off</span>
                                                    <FaBookmark className='text-[48px] pl-2 text-amber-400' />
                                                </div>
                                                <img src={`/assets/images/grocery/${product.image}`} alt="grocery" />
                                            </div>
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
                                            <div>
                                                <h5 className='tittle'>{product.title}</h5>
                                            </div>
                                            <span className="availability">{product.weight}</span>
                                            <div className="price-area">
                                                <span className="current">{product.price}</span>
                                                <div className="previous">{product.oldPrice}</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit mt-auto">
                                                    <input type="text" className="input" defaultValue="1" />
                                                    <div className="button-wrapper-action">
                                                        <MdKeyboardArrowUp className='text-3xl' />
                                                        <MdKeyboardArrowDown className='text-3xl' />
                                                    </div>
                                                </div>
                                                <button className="rts-btn btn-primary add-to-card radious-sm with-icon" type="button">
                                                    <div className="btn-text">Add</div>
                                                    <div className="arrow-icon"><FaCartPlus className='text-3xl' /></div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;
