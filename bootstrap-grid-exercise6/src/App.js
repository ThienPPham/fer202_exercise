import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <div className='nav-bar'>
        <Container>
          <Row>
            <Col>
              <ul className='sub-nav1'>
                <li><a href='' className='sub-text1'>Navbar</a></li>
                <li><a href='' className='sub-text1'>Home</a></li>
                <li><a href='' className='sub-text2'>Link</a></li>
                <li><a href='' className='sub-text2'>Dropdown</a></li>
              </ul>
            </Col>
            <Col>
              <ul className='sub-nav2'>
                <li><input type='text' placeholder='Seach' /></li>
                <li><button>Search</button></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='slider'>
        <Container>
          <img src={require('./assets/image/benjamin-voros-phIFdC6lA4E-unsplash.jpg')} alt='Star' style={{ width: '100%' }} />
        </Container>
      </div>

      <div className='title'>
        <Container>
          <h1>NEW PRODUCT</h1>
          <p>List product description</p>
        </Container>
      </div>

      <div className='card-nav'>
        <Container>
          <Row>
            <Col md='3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./assets/image/ab5d61_0b33c1d4c5b04015969fdfaa232ddbbb~mv2.jpg')} />
                <Card.Body>
                  <Card.Title>Product</Card.Title>
                  <Row>
                    <Col>
                      <Card.Text style={{ textDecorationLine: 'line-through' }}>
                        100.000 vnd
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text style={{ textAlign: 'right', color: '#c28120' }}>
                        80.000 vnd
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FontAwesomeIcon icon={faCartShopping} />                    </Col>
                    <Col>
                      <Button>Xem chi tiết</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md='3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./assets/image/images (1).jpg')} />
                <Card.Body>
                  <Card.Title>Product</Card.Title>
                  <Row>
                    <Col>
                      <Card.Text style={{ textDecorationLine: 'line-through' }}>
                        100.000 vnd
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text style={{ textAlign: 'right', color: '#c28120' }}>
                        80.000 vnd
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FontAwesomeIcon icon={faCartShopping} />                    </Col>
                    <Col>
                      <Button>Xem chi tiết</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md='3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./assets/image/3d-rendering-dark-earth-space_23-2151051360.jpg')} />
                <Card.Body>
                  <Card.Title>Product</Card.Title>
                  <Row>
                    <Col>
                      <Card.Text style={{ textDecorationLine: 'line-through' }}>
                        100.000 vnd
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text style={{ textAlign: 'right', color: '#c28120' }}>
                        80.000 vnd
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FontAwesomeIcon icon={faCartShopping} />                    </Col>
                    <Col>
                      <Button>Xem chi tiết</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md='3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./assets/image/ab5d61_0b33c1d4c5b04015969fdfaa232ddbbb~mv2.jpg')} />
                <Card.Body>
                  <Card.Title>Product</Card.Title>
                  <Row>
                    <Col>
                      <Card.Text style={{ textDecorationLine: 'line-through' }}>
                        100.000 vnd
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text style={{ textAlign: 'right', color: '#c28120' }}>
                        80.000 vnd
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FontAwesomeIcon icon={faCartShopping} />                    </Col>
                    <Col>
                      <Button>Xem chi tiết</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
