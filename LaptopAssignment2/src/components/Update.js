import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateProduct } from './ProductReducer';

function Update() {
    const { id } = useParams();
    const products = useSelector((state) => state.products);
    const existingProduct = products.filter(f => f.id == id);
    const { name, description, price, currentPrice } = existingProduct[0];
    const [uname, setName] = useState(name);
    const [udescription, setDescription] = useState(description);
    const [uprice, setPrice] = useState(price);
    const [ucurrentPrice, setCurrentPrice] = useState(currentPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateProduct({
            id: id,
            name: uname,
            description: udescription,
            price: uprice,
            currentPrice: ucurrentPrice
        }))
        navigate('/homecreate')
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update Product</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control' placeholder='enter name'
                            value={uname} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='description'>Description:</label>
                        <input type='text' name='description' className='form-control' placeholder='enter description'
                            value={udescription} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='price'>Price:</label>
                        <input type='text' name='price' className='form-control' placeholder='enter price'
                            value={uprice} onChange={e => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='currentPrice'>Email:</label>
                        <input type='text' name='currentPrice' className='form-control' placeholder='enter currentPrice'
                            value={ucurrentPrice} onChange={e => setCurrentPrice(e.target.value)} />
                    </div>
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update