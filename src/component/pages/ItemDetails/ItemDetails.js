import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemDetails.css';
const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`https://stormy-island-90522.herokuapp.com/item/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId]);


    // deliverd 
    const handleQuantity = () => {
        const { quantity, ...rest } = item;
        let newQuantity = quantity - 1;
        if (newQuantity < 0) {
            alert('There is empty quantity..!!');
        }
        else {
            const newItem = { ...rest, quantity: newQuantity };
            setItem(newItem);

            let updateUser = { newQuantity };

            const url = `https://stormy-island-90522.herokuapp.com/item/${itemId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateUser)
            })
                .then(res => res.json())
                .then(result => {
                    // alert('Item update successfully!!!');

                });
        }
    }

    // restock
    const handleAddQuantity = (e) => {
        e.preventDefault();
        const { quantity, ...rest } = item;
        let addNumber = parseInt(e.target.name.value);
        let oldQuantity = parseInt(quantity);
        let newQuantity = addNumber + oldQuantity;
        const newAddItem = { ...rest, quantity: newQuantity };
        setItem(newAddItem);
        e.target.reset();

        //update in database
        let updateUser = { newQuantity };
        const url = `https://stormy-island-90522.herokuapp.com/item/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(result => {
                alert('Item update successfully!!!');

            });
    }

    return (
        <div className='item-details'>
            <div className="single-item-img">
                <img src={item.img} alt="" />
            </div>
            <div className="single-item-text">
                <h4>Id: {item._id}</h4>
                <h4>Name: {item.name}</h4>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Supplier-Name: {item.supplierName}</p>
                <p>Sold</p>
                <button onClick={handleQuantity} className='btn btn-primary'>Delivered</button>
                <br />
                <form className='mt-2 mb-3' onSubmit={handleAddQuantity}>
                    <input type="text" name='name' />
                    <button className='btn btn-info'>Add Quantity</button>
                </form>
                <Link to='/manageInventory'>
                    <button className='btn btn-info mx-auto'>Manage-Inventory</button>
                </Link>

            </div>

        </div>
    );
};

export default ItemDetails;