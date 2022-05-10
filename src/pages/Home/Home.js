import React from 'react';
import Heros from '../Heros/Heros';
import OurServices from '../OurServices/OurServices';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Heros></Heros>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;