import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Footer;