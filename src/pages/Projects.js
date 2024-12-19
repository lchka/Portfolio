import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.scss";
import Countries from "../assets/countriestwo.webp";
import Clinic from "../assets/clinic.jpg";
import Subs from "../assets/subs2.jpg";
import OG from "../assets/og.png";
import Rest from "../assets/rest.jpg";
import Barchart from "../assets/barchart.webp";
import TodoList from "../components/TodoList"; // Assuming this is a component you want to show as the demo
import Giphy from "../assets/GIF-Player.gif"
import Todo from "../assets/todo.jpeg"

const Projects = () => {
  const [openDemo, setOpenDemo] = useState(null); // State to track which demo is open
  const [selectedLanguage, setSelectedLanguage] = useState(""); // State to track selected language for filtering

  const projects = [
    {
      id: 1,
      name: "Rest Countries API",
      image: Countries,
      description:
        "An API centered on a medical clinic, using authentication, multiple CRUD functionalities and complex delete function. With a user-friendly interface.",
      link: "https://portfolio-rest-countries.web.app/countries/",
      languages: ["React", "JSX"],
    },
    {
      id: 2,
      name: "Medical Clinic API",
      image: Clinic,
      description:
        "A React Based Front-End Project centered around creating a user-friendly interface to view some general information on countries.",
      link: "https://ca2-doctors-68a77.web.app/",
      languages: ["React", "JSX"],
    },
    {
      id: 3,
      name: "Greenville Deli",
      image: Subs,
      description:
        "An easy-to-go static Bootstrap based design application. Providing Customers with an easy and accessible way to order subs.",
      link: "https://lauras-greenville.netlify.app/",
      languages: ["BootS", "SCSS"],
    },
    {
      id: 4,
      name: "Software Project",
      image: OG,
      description:
        "A PHP Laravel-based application showcasing a car part recycling center, featuring a user point system and the use of second-hand car parts.",
      link: "https://github.com/lchka/SoftWareProject-app",
      languages: ["PHP", "Tailwind", "Laravel", "GitHub"],
    },
    {
      id: 5,
      name: "REST API 'Photos'",
      image: Rest,
      description:
        "A Laravel Sanctum based API, creating a complex yet easy to use back-end for an Instagram-like application, for posting images to followers.",
      link: "https://github.com/IADT-CC-Y3-BED/rest-api-using-laravel-lchka",
      languages: ["PHP", "Laravel", "GitHub"],
    },
    {
      id: 6,
      name: "OOP BarCharts",
      image: Barchart,
      description:
        "Purely Javascript based application, with the slight use of p5.js. To implement reactive Bar Chart classes, that can be re-used.",
      link: "https://github.com/lchka/CA-Barcharts",
      languages: ["GitHub", "JS"],
    },
    {
      id: 7,
      name: "ToDo List",
      image: Todo,
      description:
        "A todo list app, made with react and styled with bootstrap. Can be re-used anywhere across various applications.",
      link: "",
      languages: ["JSX", "BootS", "Demo"],
    },
    {
      id: 8,
      name: "Giphy Viewer",
      image: Giphy,
      description:
        "A Giphy app built with React, using the Giphy API to search and display various gifs, styled with Bootstrap.",
      link: "",
      languages: ["JSX", "BootS", "Demo"],
    }
  ];

  const languageColors = {
    React: "#FF1900", // Neon Red
    JSX: "#FF8800", // Neon Orange
    BootS: "#FFC000", // Neon Yellow
    SCSS: "#FFFA00", // Neon Yellow
    PHP: "#00FF2E", // Neon Green
    Tailwind: "#00FFA5", // Neon Cyan
    Laravel: "#057DFF", // Neon Blue
    GitHub: "#D400FF", // Neon Pink
    JSON: "#00FFE1", // Neon Aqua
    JS: "#FF00E4", // Neon Magenta
    Demo: "#FF008C", // Neon Hot Pink
  };
  

 

  const handleLanguageClick = (e, language) => {
    e.stopPropagation(); // Prevent card click when button is clicked
    setSelectedLanguage(language); // Set selected language for filtering
  };

  const toggleDemo = (id) => {
    setOpenDemo(openDemo === id ? null : id); // Toggle the demo visibility
  };

  // Filter projects based on selected language
  const filteredProjects = selectedLanguage
    ? projects.filter((project) =>
        project.languages.includes(selectedLanguage)
      )
    : projects; // If no language is selected, show all projects

  return (
    <Container className="my-5">
      <h1 className="py-3 mt-4 text-left mb-5 slide-in-left">Projects</h1>
      <h4 className="pt-4 pb-2">Search by any of these Labels!</h4>
      
      {/* Language filter buttons */}
      <div className="mb-4">
        <Button
          variant="outline-primary"
          className="m-2"
          onClick={() => setSelectedLanguage("")} // Clear filter
        >
          All
        </Button>
        {Object.keys(languageColors).map((language) => (
          <Button
            key={language}
            style={{
              backgroundColor: languageColors[language],
              border: "none",
              color: "#fff",
              margin: "0 5px 5px 0",
            }}
            onClick={(e) => handleLanguageClick(e, language)}
          >
            {language}
          </Button>
        ))}
      </div>

      <Row>
        {filteredProjects.map((project) => (
          <Col md={4} key={project.id} className="mb-4">
            <Card className="projects rounded-4 mb-3">
              <Card.Img
                className="p-2 rounded-4"
                variant="top"
                src={project.image}
                alt={project.name}
              />
              <Card.Body className="p-2">
                <Card.Title className="py-2 fs-4">{project.name}</Card.Title>
                <Card.Text className="fs-5 py-1 pb-3">{project.description}</Card.Text>
                <div className="d-flex flex-wrap">
                  {project.languages.map((language, index) => (
                    <Button
                      key={index}
                      style={{
                        backgroundColor: languageColors[language],
                        border: "none",
                        color: "#fff",
                        margin: "0 5px 5px 0",
                      }}
                      onClick={(e) => handleLanguageClick(e, language)} // Prevent card click
                    >
                      {language}
                    </Button>
                  ))}
                </div>
                <div className="d-flex justify-content-between">
                  {project.id === 8 ? (
                    <Link to="/giphy-viewer">
                      <Button className="py-2 my-3 text-uppercase" variant="primary">
                        View Demo
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className="py-2 fs-6 fw-bold my-3 text-uppercase neon-purple "
                      variant="primary"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click when button is clicked
                        toggleDemo(project.id); // Toggle demo visibility
                      }}
                    >
                      {project.languages.includes("Demo") ? "View Demo" : "View Project"}
                    </Button>
                  )}
                </div>
                {/* Collapse section for demo */}
                {project.id === 7 && (
                  <Collapse  in={openDemo === project.id}>
                    <div>
                      <TodoList /> {/* Demo content (your ToDoList component) */}
                    </div>
                  </Collapse>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
