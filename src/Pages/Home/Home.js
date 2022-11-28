import React from 'react';
import Addverstainment from './Addverstainment';
import Categories from './Categories';
import Feature from './Feature';
import Hero from './Hero';
import Sponsors from './Sponsors';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Categories></Categories>
            <Addverstainment></Addverstainment>
            <Feature></Feature>
            <Sponsors></Sponsors>
        </>
    );
};

export default Home;