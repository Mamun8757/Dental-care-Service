import React from 'react';
import logo from '../../../Resources/Assets/f_logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer p-10 text-base-content custom-color">
            <div>
                <img src={logo} alt="footer-logo" />
                <p className='text-gray-300'>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div className='text-gray-300'>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div className='text-gray-300'>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div className='text-gray-300'>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;