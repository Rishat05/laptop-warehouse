import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const ManageInventory = () => {
    const [items, setItem] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://stormy-island-90522.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete item?');
        if (proceed) {
            const url = `https://stormy-island-90522.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItem(remaining);
                })
        }
    }
    return (
        <div className='mb-3'>
            <Link to='/addItem'>
                <button className='btn btn-info mx-auto'>Add New Item</button>
            </Link>
            <div className="row">
                <h1 className='text-primary text-center mt-5 mb-2'>Inventory Items</h1>
            </div>
            <div className='ms-2 me-2'>
                <Table striped bordered hover responsive='sm'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier-Name</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr
                                key={item._id}
                                item={item}
                            >
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}$</td>
                                <td>{item.quantity}</td>
                                <td>{item.supplierName}</td>
                                <td><button onClick={() => navigateToItemDetail(item._id)} className='btn btn-primary'>Update</button></td>
                                <td><button onClick={() => handleDelete(item._id)}>❌</button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </Table>
                <br />

            </div>
        </div >
    );
};

export default ManageInventory;