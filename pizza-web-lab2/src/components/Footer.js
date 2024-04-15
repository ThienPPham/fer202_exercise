import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer() {
    return (
        <div className="footer">
            <Container>
                <div>
                    <h1>Book Your Table</h1>
                </div>
                <Row>
                    <Col className="footer-content">
                        <input type="text" placeholder="Your Name*"></input>
                    </Col>
                    <Col className="footer-content">
                        <input type="text" placeholder="Your Email"></input>
                    </Col>
                    <Col className="footer-content">
                        <select>
                            <option>Select a Service</option>
                        </select>
                    </Col>
                </Row>
                <div className="footer-comment">
                    <textarea>Please write your comment</textarea>
                </div>

                <div className="footer-button">
                    <button>Send Messages</button>
                </div>
            </Container>

        </div>
    )
}

export default Footer