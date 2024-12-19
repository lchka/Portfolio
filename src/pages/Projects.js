import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.scss";
import Countries from "../assets/countriestwo.webp";
import Clinic from "../assets/clinic.jpg";
import Subs from "../assets/subs2.jpg";
import OG from "../assets/og.png";
import Rest from "../assets/rest.jpg"

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Rest Countries API",
      image: Countries,
      description:
        "An API centered on a medical clinic, using authentication, multiple CRUD functionalities and complex delete function. With a user-friendly interface.",
      link: "https://portfolio-rest-countries.web.app/countries/",
      languages: ["React", "JSX"]
    },
    {
      id: 2,
      name: "Medical Clinic API",
      image: Clinic,
      description:
        "A React Based Front-End Project centered around creating a user-friendly interface to view some general information on countries.",
      link: "https://ca2-doctors-68a77.web.app/",
      languages: ["React", "JSX"]
    },
    {
      id: 3,
      name: "Greenville Deli",
      image: Subs,
      description: "An easy-to-go static Bootstrap based design application. Providing Customers with an easy and accessible way to order subs.",
      link: "https://lauras-greenville.netlify.app/",
      languages: ["BootS", "SCSS"]
    },
    {
      id: 4,
      name: "Software Project",
      image: OG,
      description: "A PHP Laravel-based application showcasing a car part recycling center, featuring a user point system and the use of second-hand car parts.",
      link: "https://github.com/lchka/SoftWareProject-app",
      languages: ["PHP", "Tailwind", "Laravel","Github"]
    },//ADD GITHUB
    {
        id:5,
        name:"REST API 'Photos'",
        image:Rest,
        description:"A Laravel Sanctum based API, creating a complex yet easy to use back-end for an Instagram like application, for posting images to followers.",
        link:"https://github.com/IADT-CC-Y3-BED/rest-api-using-laravel-lchka",
        languages:["PHP","Laravel","Github"]//remember to add sqlite and JSON AND GITHUB
    }
    // Add more projects as needed
  ];

  const languageColors = {
    React: "primary",
    JSX: "info",
    BootS: "success",
    SCSS: "warning",
    PHP: "danger",
    Tailwind: "secondary",
    Laravel: "dark",
    GitHub: "dark",
    JSON: "info"
  };

  const handleCardClick = (e, link) => {
    e.stopPropagation(); // Prevent any parent click handlers from triggering
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleLanguageClick = (e, language) => {
    e.stopPropagation(); // Prevent card click when button is clicked
    console.log(`Clicked on ${language}`);
  };

  return (
    <Container className=" my-5">
      <h1 className="py-3 mt-4 text-left mb-5 slide-in-left">Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col md={4} key={project.id} className="mb-4">
            <Card
              className=" projects rounded-4 mb-3 clickable-card"
              onClick={(e) => handleCardClick(e, project.link)} // Pass the event and correct link
            >
              <Card.Img className="p-2 rounded-4" variant="top" src={project.image} alt={project.name} />
              <Card.Body className="p-2">
                <Card.Title className="py-2 fs-4">{project.name}</Card.Title>
                <Card.Text className="fs-5 py-1 pb-3">{project.description}</Card.Text>
                <div className="d-flex flex-wrap">
                  {project.languages.map((language, index) => (
                    <Button
                      key={index}
                      variant={languageColors[language] || "secondary"} // Use the color mapping or default to secondary
                      className="me-2 mb-2"
                      onClick={(e) => handleLanguageClick(e, language)} // Pass event and language
                    >
                      {language}
                    </Button>
                  ))}
                </div>
                <div className="d-flex justify-content-between">
                  <Button
                    className="py-2 my-3"
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent card click when button is clicked
                  >
                    View Project
                  </Button>
                  {project.github && (
                    <Button
                      className="py-2 my-3"
                      variant="secondary"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevent card click when button is clicked
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;