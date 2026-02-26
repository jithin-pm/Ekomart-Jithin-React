import React from 'react';
import BuyingEasyway from '../components/BuyingEasyway';
import Banner from '../components/Banner';
import CategorySlider from '../components/CategorySlider';
import CategoryFeatureCards from '../components/CategoryFeatureCards';
import PopularProducts from '../components/PopularProducts';
import WeeklySales from '../components/WeeklySales';
import BlogSection from '../components/BlogSection';

const Home = () => {
    return (
        <>
            <BuyingEasyway />
            <Banner />
            <CategorySlider />
            <CategoryFeatureCards />
            <PopularProducts />
            <WeeklySales />
            <BlogSection />
        </>
    );
};

export default Home;
