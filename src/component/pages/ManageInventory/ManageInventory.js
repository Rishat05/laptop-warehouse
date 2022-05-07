import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ManageInventory = () => {
    const [items, setItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete item?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
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
                            <th>Description</th>
                            <th>Supplier-Name</th>
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
                                <td>{item.description}</td>
                                <td>{item.supplierName}</td>
                                <td><button onClick={() => handleDelete(item._id)}>❌</button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </Table>
                <br />
                <Link to='/addItem'>
                    <button className='btn btn-info '>Add New Item</button>
                </Link>
            </div>
        </div >
    );
};

export default ManageInventory;