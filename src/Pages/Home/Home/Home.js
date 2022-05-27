import React from 'react';
import ExtraSection1 from '../../ExtraSection/ExtraSection1';
import ExtraSection2 from '../../ExtraSection/ExtraSection2';
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
            <ExtraSection2></ExtraSection2>
        </>
    );
};

export default Home;