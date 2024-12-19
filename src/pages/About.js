import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.scss"

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About Me</h1>
          <p>This is the about page for my portfolio.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;