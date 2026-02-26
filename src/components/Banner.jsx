import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles/Banner.css';

const Banner = () => {
    return (
        <div className="banner-three-swiper-main-wrapper swiper-button-between">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.banner-three-swiper-main-wrapper .swiper-button-next',
                    prevEl: '.banner-three-swiper-main-wrapper .swiper-button-prev',
                }}
                loop={true}
                className="mySwiper-category-1"
            >
                <SwiperSlide>
                    <div className="rts-section-gap rts-banner-area-three banner-bg-full_1">
                        <div className="container-2">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-inner-content-three">
                                        <span className="pre">Get up to 30% off on your first $150 purchase</span>
                                        <h1 className="title">Don't miss our amazing <br />grocery deals</h1>
                                        <p className="dsicription">We have prepared special discounts for you on grocery products. Don't miss these opportunities...</p>
                                        <button className="rts-btn btn-primary radious-sm with-icon" type="button">
                                            <div className="btn-text">Shop Now</div>
                                            <div className="arrow-icon"><FaArrowRight size={16} /></div>
                                            <div className="arrow-icon"><FaArrowRight size={16} /></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rts-section-gap rts-banner-area-three img-two banner-bg-full_1">
                        <div className="container-2">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-inner-content-three">
                                        <span className="pre">Get up to 10% off on your first $250 purchase</span>
                                        <h1 className="title">Check out our incredible <br />deals today</h1>
                                        <p className="dsicription">We have prepared special discounts for you on grocery products. Don't miss these opportunities...</p>
                                        <button className="rts-btn btn-primary radious-sm with-icon" type="button">
                                            <div className="btn-text">Shop Now</div>
                                            <div className="arrow-icon"><FaArrowRight size={16} /></div>
                                            <div className="arrow-icon"><FaArrowRight size={16} /></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next"><FaArrowRight size={20} /></div>
            <div className="swiper-button-prev"><FaArrowLeft size={20} /></div>
        </div>
    );
};

export default Banner;
