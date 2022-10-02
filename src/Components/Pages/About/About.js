import React from 'react';
import AboutBanner from './AboutBanner';
import Team from './Team';
import Testiomonal from './Testiomonal';
import WhyChoseUs from './WhyChoseUs';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <WhyChoseUs></WhyChoseUs>
            <Team></Team>
            <Testiomonal></Testiomonal>
        </div>
    );
};

export default About;