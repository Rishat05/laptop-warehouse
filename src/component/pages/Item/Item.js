import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';
const Item = (props) => {
    const { _id, name, img, description, price, quantity, supplierName } = props.item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='item'>
            <div className="item-img">
                <img src={img} alt="" />
            </div>
            <div className="item-text">
                <h4>Name: {name}</h4>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>Supplier-Name: {supplierName}</p>
                <button onClick={() => navigateToItemDetail(_id)} className='btn btn-primary'>Update</button>
            </div>

        </div>
    );
};

export default Item;