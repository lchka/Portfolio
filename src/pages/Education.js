import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Education = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-5">Education</h1>
      <Row>
        <Col md={6}>
          <Card className="mb-3 rounded-4 mx-3">
            <Card.Body>
              <Card.Title className="px-5 fs-3">
                Creative Computing BSc [Hons]
              </Card.Title>
              <Card.Subtitle className=" pt-3 pb-2 px-5 fs-5 text-muted">
                Dun Laoghaire Institute Of Art Design + Technology{" "}
              </Card.Subtitle>
              <Card.Subtitle className="py-1 pb-2 px-5 text-muted">
                (2021-Ongoing)
              </Card.Subtitle>
              <Card.Text className="px-5">
                As a 23-year-old Creative Computing student in my third year at
                Dun Laoghaire Institute of Art, Design + Technology. My studies
                have equipped me with hands-on experience in technologies like
                PHP for server-side scripting, React for building dynamic and
                interactive user interfaces, and SQL for managing and querying
                relational databases.
                <br /> <br /> I'm also expreienced in other coding languages
                such as Kotlin, JSON, JavaScript, Linux, HTML, CSS and Phyton.
                With frameworks, such as Laravel, Bootstrap, TailWind and as
                mentioned React. Currently, I am on the path of receiving a class 1 honours. 
                <br /> <br />This combination of skills allows me to create
                full-stack applications with a strong focus on usability and
                functionality. 
              </Card.Text>
              <Card.Text className="px-5">
                  <blockquote className="blockquote text-end mt-4">
                    <p>"Strive for progress, not perfection."</p>
                    <footer className="blockquote-footer mt-1">
                    David Perlmutter
                    </footer>
                  </blockquote>
                </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3 mx-3">
            <Card.Body>
              <Card.Title className="px-5 fs-3">
                Animal Science Level 5 [QQI]
              </Card.Title>
              <Card.Subtitle className=" pt-3 pb-2 px-5 fs-5 text-muted">
                Killester College of Further Education/Cathal Bruga
              </Card.Subtitle>
              <Card.Subtitle className="py-1 pb-2 px-5 text-muted">
                (Year Completed:2021)
              </Card.Subtitle>
              <Card.Text className="px-5">
                At Killester College, I completed a Level 5 Certificate in
                Animal Science, which provided a strong foundation in animal
                care and related skills. Key modules included Animal Anatomy &
                Physiology, Biology, Animal Grooming, Animal Behaviour, Animal
                Welfare, and Veterinary Assisting Skills.
                <br />
                <br /> Additional coursework in Word Processing, Communications,
                and Work Experience helped me develop practical skills and
                workplace readiness. This program deepened my understanding of
                animal science while equipping me with hands-on experience in
                the field.
                <br />  <br /> 
                With the invaluable guidance of my teachers, I was able to graduate with top distinctions.
                <br />
                <br />
                This has provided me with professional skills in which i cant
                use in the daily life, which I am incredibly grateful for.
               
              </Card.Text>
              <Card.Text className="px-5">
                  <blockquote className="blockquote text-end mt-4">
                    <p>"Go your own way."</p>
                    <footer className="blockquote-footer mt-1">
                    Fleetwood Mac
                    </footer>
                  </blockquote>
                </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
