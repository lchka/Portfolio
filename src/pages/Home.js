import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import "../styles/TodoList.scss";


const Home = () => {
  return (
    <Container className="text-center mt-5 py-5">
      <h1>Welcome to the Country Explorer</h1>
      <iframe
        src="https://giphy.com/embed/xT5LMEZCu8g8vZiAgM"
        width="480"
        height="367"
          frameBorder="0"
        allowFullScreen
        title="Giphy GIF"
        className="giphy-embed"
      ></iframe>
      <p className="mt-4">
        <Link
          to="/countries"
          className="text-decoration-none fs-1 text-body-secondary link"
        >
          CLICK HERE FOR COUNTRIES
        </Link>
      </p>
      {/* Add a wrapper for positioning the sticky note */}
      {/* <div className="sticky-note-wrapper">
        <TodoList />
      </div> */}
    </Container>
  );
};

export default Home;
