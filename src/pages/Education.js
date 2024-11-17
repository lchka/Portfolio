import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Education = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Education</h1>
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Bachelor of Science in Computer Science</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">University Name</Card.Subtitle>
              <Card.Text>
                Description of the degree, courses taken, and any relevant information.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Master of Science in Software Engineering</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">University Name</Card.Subtitle>
              <Card.Text>
                Description of the degree, courses taken, and any relevant information.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;