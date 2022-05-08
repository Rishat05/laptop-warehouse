import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Item from '../Item/Item';
const MyItem = () => {
    const [user, loading] = useAuthState(auth);
    const [items, setItem] = useState([]);
    useEffect(() => {
        const email = user?.email;
        fetch(`https://stormy-island-90522.herokuapp.com/item?addedBy=${email}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [user]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete item?');
        if (proceed) {
            const url = `https://stormy-island-90522.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    setItem(remaining);
                })
        }
    }
    if (loading) {
        return <p>Loding...</p>
    }
    return (
        <div>

            <h2 className='text-center'>my item: {items.length}</h2>
            <div className="item-show">
                {
                    items.map(item => <div key={item._id}>
                        <Item
                            key={item._id}
                            item={item}
                        ></Item>
                        <button className='btn btn-danger ms-4 mb-4' onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>

                    )
                }
            </div>

        </div>
    );
};

export default MyItem;