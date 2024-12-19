import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Dropdown, Container, Col, Button } from "react-bootstrap";
import Search from "./Search";
import ViewTrending from "./ViewTrending";
import Random from "./Random";
import "../../styles/GiphyViewer.scss";
import "../../styles/BackButton.scss";


const GIPHY_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "zS8ylSqoBUwvEZj2Vs15oVsNQ7eJydkX";

// GifCard component
const GifCard = ({ image, title, url }) => {
  return (
    <Card className="neon-card mb-4">
      <Card.Img
        variant="top"
        src={image}
        className="object-fit-cover neon-img h-75 pt-2"
      />
      <Card.Body className="neon-body">
        <Card.Title className="neon-title">
          <a href={url} className="neon-link">
            {title}
          </a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

// Limit dropdown to set the number of results
const LimitDropDown = (props) => {
  const setLimit = props.setLimit;

  const handleSelect = (eventKey) => {
    setLimit(Number(eventKey)); // Update limit based on dropdown selection
  };

  return (
    <Dropdown onSelect={handleSelect} className="neon-dropdown">
      <Dropdown.Toggle variant="success" className="neon-btn neon-blue">
        Result Limit
      </Dropdown.Toggle>
      <Dropdown.Menu className="neon-menu">
        <Dropdown.Item eventKey={15} className="neon-item">15</Dropdown.Item>
        <Dropdown.Item eventKey={20} className="neon-item">20</Dropdown.Item>
        <Dropdown.Item eventKey={25} className="neon-item">25</Dropdown.Item>
        <Dropdown.Item eventKey={30} className="neon-item">30</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

// Main GiphyViewer component
const GiphyViewer = () => {
  const [gifs, setGifs] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    // Fetch trending gifs based on the current limit
    axios
      .get(`${GIPHY_URL}/trending?api_key=${API_KEY}&limit=${limit}`)
      .then((response) => {
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [limit]); // Re-fetch gifs whenever limit changes

  return (
    <Container className="neon-container py-5">
      <Button
              className="back-button neon-white my-3"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
      <Row className="d-flex justify-content-between align-items-center neon-header mb-4" md={4}>
        <Search setGifs={setGifs} /> {/* Search component */}
        <ViewTrending setGifs={setGifs} /> {/* ViewTrending component */}
        <Random setGifs={setGifs} /> {/* Random component */}
        <LimitDropDown setLimit={setLimit} /> {/* Limit dropdown */}
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
        {gifs.map((gif) => (
          <Col key={gif.id}>
            <GifCard
              image={gif.images.fixed_width.url}
              title={gif.title}
              url={gif.url}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GiphyViewer;
