import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const addedBy = user.email;
        const item = { ...data, addedBy };
        // console.log(item);
        const url = `https://stormy-island-90522.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert(result.success);

            });

        reset();
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>This is add item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='SupplierName' type="text" {...register("supplierName")} />
                <input className='mb-2' placeholder='Photo url' type="text" {...register("img")} />

                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;