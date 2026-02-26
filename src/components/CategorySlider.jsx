import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './styles/CategorySlider.css';

import 'swiper/css'
import 'swiper/css/navigation'

const categories = [
    { img: '01.png', name: 'Organic Vegetable' },
    { img: '02.png', name: 'Organic Vegetable' },
    { img: '03.png', name: 'Organic Vegetable' },
    { img: '04.png', name: 'Organic Vegetable' },
    { img: '05.png', name: 'Organic Vegetable' },
    { img: '06.png', name: 'Organic Vegetable' },
    { img: '07.png', name: 'Organic Vegetable' },
    { img: '08.png', name: 'Organic Vegetable' },
    { img: '09.png', name: 'Organic Vegetable' },
    { img: '10.png', name: 'Organic Vegetable' },
]

const CategorySlider = () => {
    return (
        <div className="rts-category-area rts-section-gapTop">
            <div className="container-2">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area-between">
                            <h2 className="title-left mb--0">Featured Categories</h2>
                            <div className="next-prev-swiper-wrapper">
                                <div className="swiper-button-prev cat-prev-three">
                                    <FaChevronLeft />
                                </div>
                                <div className="swiper-button-next cat-next-three">
                                    <FaChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cover-card-main-over">
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.cat-next-three',
                                    prevEl: '.cat-prev-three',
                                }}
                                breakpoints={{
                                    320: { slidesPerView: 2, spaceBetween: 10 },
                                    480: { slidesPerView: 3, spaceBetween: 15 },
                                    576: { slidesPerView: 4, spaceBetween: 15 },
                                    768: { slidesPerView: 5, spaceBetween: 15 },
                                    992: { slidesPerView: 6, spaceBetween: 15 },
                                    1200: { slidesPerView: 7, spaceBetween: 15 },
                                }}
                                className="mySwiper-category-1"
                            >
                                {categories.map((cat, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="single-category-one">
                                            <Link to="/shop">
                                                <img
                                                    src={`/assets/images/category/${cat.img}`}
                                                    alt="category"
                                                />
                                                <p>{cat.name}</p>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategorySlider
