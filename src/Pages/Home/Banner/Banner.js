import React from 'react';
import { Link } from 'react-router-dom';
import Banner1 from '../../../Resources/Assets/Banner/Banner1.jpg';
import Banner2 from '../../../Resources/Assets/Banner/Banner2.jpg';
import Banner3 from '../../../Resources/Assets/Banner/Banner3.jpg';
import Banner4 from '../../../Resources/Assets/Banner/Banner4.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div className="carousel w-3/4 h-auto mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-overlay'>
                    <img src={Banner1} alt="Banner1" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-5xl font-bold text-white'>
                        Professional and Highly Trained <br /> Dentist! <br />
                        <p className='text-xl mt-10'>
                            We offer best Dental service by the professional and well <br></br> trained Dentist! We assure the best service.
                        </p>
                        <Link to='/about-us' className='btn'>Learn More</Link>
                    </h1>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={Banner2} alt="Banner2" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-5xl font-bold text-white'>
                        Quality Orthodontic Treatments <br /> for the Entire family <br />
                        <p className='text-xl mt-10'>
                            We offer best Dental service by the professional and well <br></br> trained Dentist! We assure the best service.
                        </p>
                        <Link to='/about-us' className='btn'>Learn More</Link>
                    </h1>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Banner3} alt="Banner3" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-5xl font-bold text-white'>
                        Dental Service for the Entire <br /> family! <br />
                        <p className='text-xl mt-10'>
                            We offer best Dental service by the professional and well <br></br> trained Dentist! We assure the best service.
                        </p>
                        <Link to='/about-us' className='btn'>Learn More</Link>
                    </h1>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={Banner4} alt="Banner4" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-5xl font-bold text-white'>
                        Affordable Teeth Whitening for the <br /> Entire family! <br />
                        <p className='text-xl mt-10'>
                            We offer best Dental service by the professional and well <br></br> trained Dentist! We assure the best service.
                        </p>
                        <Link to='/about-us' className='btn'>Learn More</Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;