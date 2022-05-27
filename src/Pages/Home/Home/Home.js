import React from 'react';
import ExtraSection1 from '../../ExtraSection/ExtraSection1';
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
            <ExtraSection1></ExtraSection1>
        </>
    );
};

export default Home;