import React from 'react';
import HomeBanner from './HomeBanner';
import Crafted from '../Service/Crafted';
import WhyChoseUs from '../About/WhyChoseUs';
import WeHelpYou from './WeHelpYou';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Crafted></Crafted>
            <WhyChoseUs></WhyChoseUs>
            <WeHelpYou></WeHelpYou>
        </div>
    );
};

export default Home;