import React from 'react';
import Banner from '../Banner/Banner';

import CountOfView from '../CountOfView/CountOfView';


const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <CountOfView></CountOfView>

        </div>
    );
};

export default Home;