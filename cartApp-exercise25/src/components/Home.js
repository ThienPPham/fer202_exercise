import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteProduct } from './ProductReducer';

function Home() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteProduct({ id: id }))
    }

    return (
        <div className='container'>
            <h2>CRUD App with JSON Server</h2>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>catalogs</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.catalogs ? product.catalogs.join(' ') : ''}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={() => handleDelete(product.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Home
