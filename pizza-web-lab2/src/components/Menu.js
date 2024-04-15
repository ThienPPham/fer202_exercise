import React from "react";
import '../App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Menu() {
    return (
        <div className="menu-card">
            <div>
                <h1>Our Menu</h1>
            </div>
            <Container className="justify-content-center">
                <Row>
                    <Col md='3'>
                        <Card className="card-dish">
                            <Card.Img className="card-image" variant="top" src="/images/menu1.jpg" />
                            <div className="card-sale">SALE</div>
                            <Card.Body>
                                <Card.Title>Margherita Pizza</Card.Title>
                                <Card.Text className="card-content">
                                    <p className="card-subcontent1">$40.00</p><p className="card-subcontent2">$24.00</p>
                                </Card.Text>
                                <Button variant="primary" className="card-button">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="card-dish">
                            <Card.Img variant="top" src="/images/menu2.jpg" />
                            <Card.Body>
                                <Card.Title>Mushroom Pizza</Card.Title>
                                <Card.Text className="card-content">
                                    <p className="card-subcontent2" style={{ color: '#000000' }}>$25.00</p>
                                </Card.Text>
                                <Button variant="primary" className="card-button">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="card-dish">
                            <Card.Img className="card-image" variant="top" src="/images/menu3.jpg" />
                            <div className="card-sale">NEW</div>
                            <Card.Body>
                                <Card.Title>Hawaiian Pizza</Card.Title>
                                <Card.Text className="card-content">
                                    <p className="card-subcontent2" style={{ color: '#000000' }}>$30.00</p>
                                </Card.Text>
                                <Button variant="primary" className="card-button">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="card-dish">
                            <Card.Img className="card-image" variant="top" src="/images/menu4.jpg" />
                            <div className="card-sale">SALE</div>
                            <Card.Body>
                                <Card.Title>Pesto Pizza</Card.Title>
                                <Card.Text className="card-content">
                                    <p className="card-subcontent1">$50.00</p><p className="card-subcontent2">$30.00</p>
                                </Card.Text>
                                <Button variant="primary" className="card-button">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Menu;
