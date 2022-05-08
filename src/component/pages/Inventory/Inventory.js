import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './Inventory.css';
const Inventory = () => {
    const [items, setItem] = useState([]);
    useEffect(() => {
        fetch('https://stormy-island-90522.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    return (
        <div id='inventory' className='container mb-5'>
            <div className="row">
                <h1 className='text-primary text-center mt-5 mb-2'>Inventory Items</h1>
            </div>
            <div className="item-show">
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
                <br />
                <Link to='/manageInventory'>
                    <button className='btn btn-info mx-auto'>Manage-Inventory</button>
                </Link>

            </div>

        </div>
    );
};

export default Inventory;