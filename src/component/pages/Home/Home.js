import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

import CountOfView from '../CountOfView/CountOfView';


const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <CountOfView></CountOfView>
            <Contact></Contact>
        </div>
    );
};

export default Home;