import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import CountOfView from '../CountOfView/CountOfView';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Inventory></Inventory>
            <CountOfView></CountOfView>
            <Contact></Contact>
        </div>
    );
};

export default Home;