import React from 'react';
import './styles/BuyingEasyway.css';
import { FaBoxOpen, FaRegSmile } from 'react-icons/fa';
import { IoCardOutline } from "react-icons/io5";
import { MdLocationPin } from 'react-icons/md';

const BuyingEasyway = () => {
    return (
        <div className="buying-easyway-process">
            <div className="container-2">
                <div className="col-lg-12">
                    <div className="easyway-buying-area-wrapper">
                        {/* Card 1 - Installments */}
                        <div className="single-easy-way-buying-area">
                            <div className="icon">
                                <IoCardOutline className='text-4xl text-[#629d23]' />

                            </div>
                            <div className="inforemation">
                                <h4 className="title">Installments Without Card</h4>
                                <p>Easy Payment Option</p>
                            </div>
                        </div>

                        {/* Card 2 - Track Order */}
                        <div className="single-easy-way-buying-area">
                            <div className="icon">
                                <MdLocationPin className='text-4xl text-[#629d23]' />
                            </div>
                            <div className="inforemation">
                                <h4 className="title">Track Your Order Online</h4>
                                <p>Order Location Check</p>
                            </div>
                        </div>

                        {/* Card 3 - Happy Customers */}
                        <div className="single-easy-way-buying-area">
                            <div className="icon">
                               <FaRegSmile className='text-4xl text-[#629d23]' />
                            </div>
                            <div className="inforemation">
                                <h4 className="title">100% Happy Customers</h4>
                                <p>Happy Customer Feedbacks</p>
                            </div>
                        </div>

                        {/* Card 4 - Free Delivery */}
                        <div className="single-easy-way-buying-area">
                            <div className="icon">
                                <FaBoxOpen className='text-4xl text-[#629d23]' />

                            </div>
                            <div className="inforemation">
                                <h4 className="title">Free Delivery From $70</h4>
                                <p>Home Delivery Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyingEasyway;
