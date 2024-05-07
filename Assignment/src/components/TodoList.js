import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function PostApi() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        image: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const apiUrl = 'http://localhost:3000/products';
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiUrl = 'http://localhost:3000/products';
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                fetchData(); // Fetch data again to refresh the list after adding the new product
                setNewProduct({ name: '', description: '', price: '' , currentPrice: ''}); // Clear the form fields
            })
            .catch(error => {
                setError(error.message);
            });
    };

    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No product list found</div>;

    return (
        <div style={{ backgroundColor: 'black' }}>
            <h1 style={{ textAlign: 'center', color: 'white' }}>ProductList</h1>
            <div className='product-list'>
                <ul className="header" style={{ color: 'white', display: 'flex', listStyleType: 'none', padding: 0 }}>
                    <li style={{ width: '25%', textAlign: 'center', border: 'solid 1px', padding: '10px' }}>Name</li>
                    <li style={{ width: '25%', textAlign: 'center', border: 'solid 1px', padding: '10px' }}>Description</li>
                    <li style={{ width: '25%', textAlign: 'center', border: 'solid 1px', padding: '10px' }}>Price</li>
                    <li style={{ width: '25%', textAlign: 'center', border: 'solid 1px', padding: '10px' }}>Current Price</li>
                </ul>
                {data.map(product => (
                    <ul key={product.id} style={{ color: 'white', display: 'flex', listStyleType: 'none', padding: 0 }}>
                        <li style={{ width: '25%', border: 'solid 1px', padding: '10px' }}>{product.name}</li>
                        <li style={{ width: '25%', border: 'solid 1px', padding: '10px' }}>{product.description}</li>
                        <li style={{ width: '25%', border: 'solid 1px', padding: '10px' }}>{product.price}</li>
                        <li style={{ width: '25%', border: 'solid 1px', padding: '10px' }}>{product.currentPrice}</li>
                    </ul>
                ))}
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <h2>Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Name" required />
                    <input type="text" name="description" value={newProduct.description} onChange={handleInputChange} placeholder="Description" required />
                    <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price" required />
                    <input type="text" name="currentPrice" value={newProduct.currentPrice} onChange={handleInputChange} placeholder="Current Price" required />
                    <button type="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
}

export default PostApi;
