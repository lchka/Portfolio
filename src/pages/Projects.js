import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
    const projects = [
        { id: 1, name: 'Project One', description: 'This is the first project' },
        { id: 2, name: 'Project Two', description: 'This is the second project' },
        { id: 3, name: 'Project Three', description: 'This is the third project' },
    ];

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Projects</h1>
            <Row>
                {projects.map(project => (
                    <Col md={4} key={project.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects;