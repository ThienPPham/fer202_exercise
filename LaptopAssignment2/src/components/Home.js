import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { products } from './Data';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <h2>CRUD App with JSON Server</h2>
            <Link to="/homecreate" className='btn btn-success my-3' style={{ display: 'block' }}>ProductList</Link>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {products.map((product, index) => (
                    <Card key={index} style={{ width: '30%', marginBottom: '20px' }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description} <br />
                                <p style={{textDecoration: 'line-through'}}>{product.price}</p>        <br />
                                {product.currentPrice}                     </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    )
}

export default Home
