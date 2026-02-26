import React from 'react';
import './styles/HeaderTopBar.css';

const HeaderTopBar = () => {
    return (
        <div className="header-top-area bg_primary">
            <div className="container-2">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bwtween-area-header-top">
                            <div className="discount-area">
                                <p className="disc">FREE delivery &amp; 40% Discount for next 3 orders! Place your 1st order in.</p>
                                
                            </div>
                            <div className="contact-number-area">
                                <p>Need help? Call Us:<a href="#">+258 3268 21485</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopBar;
