import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Contact Us</h2>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                        </Form.Group>

                        <Button variant="primary" className='my-2' type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;