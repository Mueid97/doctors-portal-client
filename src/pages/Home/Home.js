import React from 'react';
import Heros from '../Heros/Heros';
import OurServices from '../OurServices/OurServices';
import ApponmenSection from './ApponmenSection';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Heros></Heros>
            <OurServices></OurServices>
            <ApponmenSection></ApponmenSection>
        </div>
    );
};

export default Home;