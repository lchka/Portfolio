import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  return (
    <Navbar className="items-center" bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        My Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto align-items-center">
          {/* home */}
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          {/* about */}
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>

          {/* projects */}
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>

          {/* contact */}
          <button>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
