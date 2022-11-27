import React from 'react';
import Categories from './Categories';
import Feature from './Feature';
import Hero from './Hero';
import Sponsors from './Sponsors';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Categories></Categories>
            <Feature></Feature>
            <Sponsors></Sponsors>
        </>
    );
};

export default Home;