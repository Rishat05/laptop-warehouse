import React from 'react';
import './CountOfView.css';
const CountOfView = () => {
    return (
        <div className='Count-view mb-5'>
            <div className="sale view">
                <h2>30000</h2>
                <h5>LAPTOP FOR SALE</h5>
            </div>
            <div className="review view">
                <h2>7500</h2>
                <h5>DEALER REVIEWS</h5>
            </div>
            <div className="visitors view">
                <h2>25000</h2>
                <h5>VISITORS PER DAY</h5>
            </div>
            <div className="verified view">
                <h2>8250</h2>
                <h5>VERIFIED DEALERS</h5>
            </div>
        </div>
    );
};

export default CountOfView;