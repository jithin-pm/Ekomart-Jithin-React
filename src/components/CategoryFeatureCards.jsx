import React from 'react';
import './styles/CategoryFeatureCards.css';

const CategoryFeatureCards = () => {
    const cards = [
        { className: 'one', title: 'Drink Fresh Corn Juice', subtitle: 'Good Taste' },
        { className: 'two', title: 'Organic Lemon Flavored', subtitle: 'Banana Chips' },
        { className: 'three', title: 'Nozes Pecanera Brasil', subtitle: 'Chocolate Snacks' },
    ];

    return (
        <div className="category-feature-area rts-section-gap">
            <div className="container-2">
                <div className="row g-24">
                    {cards.map((card, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                            <div className={`single-feature-card ssthree style-three bg_image ${card.className}`}>
                                <div className="content-area">
                                    <a className="rts-btn btn-primary" href="/shop">Weekend Discount</a>
                                    <h3 className="title">{card.title} <br /><span>{card.subtitle}</span></h3>
                                    <a className="shop-now-goshop-btn" href="/shop">
                                        <span className="text">Shop Now</span>
                                        <div className="plus-icon"><i className="fa-sharp fa-regular fa-plus"></i></div>
                                        <div className="plus-icon"><i className="fa-sharp fa-regular fa-plus"></i></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryFeatureCards;
