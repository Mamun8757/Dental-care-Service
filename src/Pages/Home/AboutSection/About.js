import React from 'react';
import { Link } from 'react-router-dom';
import AboutImage from '../../../Resources/Assets/images/about.png';
const About = () => {
    return (
        <div className="hero max-h-full bg-slate-50 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 pl-10'>
                    <img src={AboutImage} className="max-w-md rounded-lg shadow-2xl" alt=''/>
                </div>
                 <div className='w-1/2'>
                    <h1 className="text-4xl font-bold">WELCOME TO MY DECARE SERVICE!!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/services' className='btn headerBtn-color'>Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default About;