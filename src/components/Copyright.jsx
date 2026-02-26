import React from 'react';
import './styles/Copyright.css';

const Copyright = () => {
    return (
        <div className="rts-copyright-area-two">
            <div className="container-2">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-arae-two-wrapper">
                            <p className="disc">Copyright {new Date().getFullYear()} <a href="#">©Ekomart</a>. All rights reserved.</p>
                            <div className="payment-processw-area">
                                <span>Payment Accepts:</span>
                                <img src="/assets/images/payment/04.png" alt="payment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
