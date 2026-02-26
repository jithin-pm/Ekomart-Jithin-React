import React from 'react';
import './styles/BlogSection.css';
import { IoTimeOutline } from 'react-icons/io5';
import { FaRegFolder } from 'react-icons/fa';

const blogPosts = [
    {
        id: 1,
        image: '01.jpg',
        date: '15 Sep, 2023',
        category: 'Modern Fashion',
        title: 'Shion Fixation: Fueling Your Passion for All Things Stylish',
        link: '#',
    },
    {
        id: 2,
        image: '02.jpg',
        date: '15 Sep, 2023',
        category: 'Modern Fashion',
        title: 'Ashion Fixation: Fueling Your Passion for All Things Stylish',
        link: '#',
    },
    {
        id: 3,
        image: '03.jpg',
        date: '15 Sep, 2023',
        category: 'Modern Fashion',
        title: 'Fixation: Fueling Your Passion for All Things Stylish',
        link: '#',
    },
];

const BlogSection = () => {
    return (
        <div className="blog-area-start rts-section-gap">
            <div className="container-2">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-area-between">
                            <h2 className="title-left mb--0">Latest Blog Post Insights</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-24">
                    {blogPosts.map((post) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={post.id}>
                            <div className="single-blog-area-start style-two">
                                <a className="thumbnail" href={post.link}>
                                    <img src={`/assets/images/blog/${post.image}`} alt="blog-area" />
                                </a>
                                <div className="blog-body">
                                    <div className="top-area">
                                        <div className="single-meta">
                                            <IoTimeOutline className='text-3xl'  />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="single-meta">
                                            <FaRegFolder className='text-3xl' />
                                            <span>{post.category}</span>
                                        </div>
                                    </div>
                                    <a href={post.link}>
                                        <h4 className="title">{post.title}</h4>
                                    </a>
                                    <a className="shop-now-goshop-btn" href={post.link}>
                                        <span className="text">Read Details</span>
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

export default BlogSection;
