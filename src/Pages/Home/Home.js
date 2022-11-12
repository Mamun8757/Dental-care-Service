import React from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='mt-10 mb-10 max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <div className='text-center'>
                <h2>Our Services</h2>
            </div>
            <div className='text-center text-primary'>
                <h1>WHAT WE PROVIDE</h1>
            </div>
            <div>
                <Service></Service>
            </div>
            <div >
                <Link to='/services' className='btn'>See All</Link>
            </div>
        </div>
    );
};

export default Home;