import React from 'react';
import Heros from '../Heros/Heros';
import OurServices from '../OurServices/OurServices';
import ApponmenSection from './ApponmenSection';
import Banner from './Banner';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Heros></Heros>
            <OurServices></OurServices>
            <ApponmenSection></ApponmenSection>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;