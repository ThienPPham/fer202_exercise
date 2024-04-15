import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="menu">
            <Container>
                <Row>
                    <Col>
                        <div className="nav">
                            <ul className="sub-nav">
                                <li>Pizza House</li>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="search">
                            <ul className="sub-search">
                                <li className="search-bar"><input type="text" placeholder="Search" /></li>
                                <li className="icon-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;