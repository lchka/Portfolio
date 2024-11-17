import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-5 align-items-center">
      {/* Brand */}
      <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      {/* Collapsible Content */}
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex w-100 align-items-center">
        {/* Centered Nav Links */}
        <Nav className="mx-auto d-flex align-items-center">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/education">Education</Nav.Link>

        </Nav>

        {/* Right-Aligned Button */}
        <button className="btn btn-primary">
          <Link to="/contact" className="text-white text-decoration-none">
            Contact
          </Link>
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
