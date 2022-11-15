import React from 'react';
import { Link } from 'react-router-dom';
import Banner1 from '../../../Resources/Assets/Banner/Banner1.jpg';
import Banner2 from '../../../Resources/Assets/Banner/Banner2.jpg';
import Banner3 from '../../../Resources/Assets/Banner/Banner3.jpg';
import Banner4 from '../../../Resources/Assets/Banner/Banner4.jpg';
import './Banner.css';
const Banner = () => {
    // const noScrolling = event =>{
    //     event.preventDefault();
    // }
    return (
       <div className="carousel w-10/12 mx-auto border-solid border-2 rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-overlay'>
                    <img src={Banner1} alt="Banner1"/>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 gap-10">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-5xl font-bold text-white'>
                        Professional and Highly Trained <br /> Dentist! <br />
                        <p className='text-xl mt-10'>
                            We offer best Dental service by the professional and well <br></br> trained Dentist! We assure the best service.
                        </p>
                        <br />
                        <Link to='/services' className='btn h-10 bg-gradient-to-r from-cyan-500 to-blue-500 border-white hover:border-white'>Get Started</Link>
                    </h1>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-overlay'>
                    <img src={Banner2} alt="Banner1" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 gap-10">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-5xl font-bold text-white'>
                        Quality Orthodontic Treatments <br /> for the Entire family <br />
                        <p className='text-xl mt-10'>
                            We offer best Dental service by the professional and well <br></br> trained Dentist! We assure the best service.
                        </p>
                        <br />
                        <Link to='/services' className='btn h-10 bg-gradient-to-r from-cyan-500 to-blue-500 border-white hover:border-white'>Get Started</Link>
                    </h1>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='carousel-overlay'>
                    <img src={Banner3} alt="Banner1" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 gap-10">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-5xl font-bold text-white'>
                        Dental Service for the Entire <br /> family! <br />
                        <p className='text-xl mt-10'>
                            We offer best Dental service by the professional and well <br></br> trained Dentist! We assure the best service.
                        </p>
                        <br />
                        <Link to='/services' className='btn h-10 bg-gradient-to-r from-cyan-500 to-blue-500 border-white hover:border-white'>Get Started</Link>
                    </h1>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='carousel-overlay'>
                    <img src={Banner4} alt="Banner1" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 gap-10">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h1 className='text-5xl font-bold text-white'>
                        Affordable Teeth Whitening for the <br /> Entire family! <br />
                        <p className='text-xl mt-10'>
                            We offer best Dental service by the professional and well <br></br> trained Dentist! We assure the best service.
                        </p>
                        <br />
                        <Link to='/services' className='btn h-10 bg-gradient-to-r from-cyan-500 to-blue-500 border-white hover:border-white'>Get Started</Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;