import React from 'react';
import Slider from '../../Components/Slider/Slider';
import Stat from '../../Components/Stat/Stat';
import Accordion from '../../Components/Accordion/Accordion';
import Banner from '../../Components/Banner/Banner';
import Process from '../Process/Process';

const Homepage = () => {
    return (
        <div>
            <Slider></Slider>
            <Process></Process>
            <Banner></Banner>
            <Accordion></Accordion>
            <Stat></Stat>
        </div>
    );
};

export default Homepage;