import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteProduct } from './ProductReducer';

function HomeCreate() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handleDelete = (id) =>{
        dispatch(deleteProduct({id: id}))
    }
    
  return (
    <div className='container'>
        <h2>CRUD Laptop</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link>
        <Link to= '/' className='btn btn-danger'>Back to home</Link>
        <table className='table'  style={{border: '1px solid'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>currentPrice</th>
                </tr>
            </thead>

            <tbody>
                {products.map((product, index) => (
                    <tr  key={index}>
                        <td style={{border: '1px solid'}}>{product.id}</td>
                        <td style={{border: '1px solid'}}>{product.name}</td>
                        <td style={{border: '1px solid'}}>{product.description}</td>
                        <td style={{border: '1px solid'}}>{product.price}</td>
                        <td style={{border: '1px solid'}}>{product.currentPrice}</td>
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

export default HomeCreate;