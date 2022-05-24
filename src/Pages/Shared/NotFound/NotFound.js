import React from 'react';
import img from '../../../images/extra/notFound.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>This page is not found</h2>
            <img className=" w-100 mx-auto" src={img} alt="" />
        </div>
    );
};

export default NotFound;