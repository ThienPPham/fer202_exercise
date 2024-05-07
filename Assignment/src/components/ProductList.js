import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function DemoApi() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'http://localhost:3000/products';
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network respose was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No product list found</div>;
    return (
        <div style={{backgroundColor: 'black'}}>
            <h1 style={{textAlign: 'center', color: 'white'}}>ProductList</h1>
            <div>
                {data.map(product => (
                    <Card key={product.id} style={{ width: '20rem', marginBottom: '20px', display: 'inline-block' }}>
                        <Card.Img variant="top" src={product.image} alt={product.name} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Button variant="danger">view detail</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default DemoApi;