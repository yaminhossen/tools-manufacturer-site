import React from 'react';
import './Footer.css'
import copy from '../../../images/logo/copy.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer text-center mt-5 flex justify-center '>
            <p className='flex items-center'>copyright <img src={copy} alt="" /><span className='text-warning'>{year}</span> all right reserve.</p>
        </footer>
    );
};

export default Footer;