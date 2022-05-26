import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Summury from '../../Summury/Summury';
import Banner from '../Banner/Banner';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Tools></Tools>
            <Summury></Summury>
            <Reviews></Reviews>
        </>
    );
};

export default Home;