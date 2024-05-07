import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProduct } from './ProductReducer';

function Update() {
    const { id } = useParams();
    const products = useSelector((state) => state.products);
    const existingProduct = products.find(product => product.id === id);
    const { name, price, description, catalogs } = existingProduct;
    const [uname, setName] = useState(name);
    const [uprice, setPrice] = useState(price);
    const [udescription, setDescription] = useState(description);
    const [ucatalogs, setCatalogs] = useState(catalogs.join(', '));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        const updatedCatalogs = ucatalogs.split(',').map(catalog => catalog.trim());
        dispatch(updateProduct({
            id: id,
            name: uname,
            price: uprice,
            description: udescription,
            catalogs: updatedCatalogs
        }));
        navigate('/');
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update Product</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter name' value={uname} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='price'>Price:</label>
                        <input type='text' name='price' className='form-control' placeholder='Enter price' value={uprice} onChange={e => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='description'>Description:</label>
                        <input type='text' name='description' className='form-control' placeholder='Enter description' value={udescription} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='catalog'>Catalog:</label>
                        <input type='text' name='catalog' className='form-control' placeholder='Enter catalog' value={ucatalogs} onChange={e => setCatalogs(e.target.value)} />
                    </div><br />
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;