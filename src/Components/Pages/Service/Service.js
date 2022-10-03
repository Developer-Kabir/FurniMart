import React from 'react';
import Testiomonal from '../About/Testiomonal';
import Crafted from './Crafted';
import ProvidedService from './ProvidedService';
import ServiceBanner from './ServiceBanner';

const Service = () => {
    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <ProvidedService></ProvidedService>
            <Crafted></Crafted>
            <Testiomonal></Testiomonal>
        </div>
    );
};

export default Service;