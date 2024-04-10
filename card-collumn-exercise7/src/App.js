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
      <div className='card-nav'>
        <Container>
          <Row>
            <Col md='4' className='earth-card'>
              <Card style={{ width: '23rem' }}>
                <div className='btn btn-primary'>
                  <Card.Img variant="top" src={require('./assets/image/ab5d61_0b33c1d4c5b04015969fdfaa232ddbbb~mv2.jpg')} />
                  <Card.Body>
                    <Card.Text>
                      Show text inside the first card
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md='4' className='earth-card'>
              <Card style={{ width: '23rem' }}>
                <div className='btn btn-danger'>
                  <Card.Img variant="top" src={require('./assets/image/ab5d61_0b33c1d4c5b04015969fdfaa232ddbbb~mv2.jpg')} />
                  <Card.Body>
                    <Card.Text>
                      Show text inside the first card
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md='4' className='earth-card'>
              <Card style={{ width: '23rem' }}>
                <div className='btn btn-warning'>
                  <Card.Img variant="top" src={require('./assets/image/ab5d61_0b33c1d4c5b04015969fdfaa232ddbbb~mv2.jpg')} />
                  <Card.Body>
                    <Card.Text>
                      Show text inside the first card
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
