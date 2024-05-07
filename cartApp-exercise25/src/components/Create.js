import React, { useState } from 'react'
import { addProduct } from './ProductReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [catalogs, setCatalogs] = useState(['']);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addProduct({ id: products[products.length - 1].id + 1, name, price, description, catalogs }))
        navigate('/')
    }

    const handleCatalogChange = (event) => {
        // Split the input value by comma and trim each value
        const inputCatalogs = event.target.value.split(',').map(catalog => catalog.trim());
        setCatalogs(inputCatalogs);
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add New Product</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control' placeholder='enter name'
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='price'>Price:</label>
                        <input type='text' name='price' className='form-control' placeholder='enter price'
                            onChange={e => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='description'>Description:</label>
                        <input type='text' name='description' className='form-control' placeholder='enter description'
                            onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='catalog'>Catalog:</label>
                        <input type='text' name='catalog' className='form-control' placeholder='Enter catalog' onChange={handleCatalogChange} />
                    </div><br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create