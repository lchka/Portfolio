import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../styles/GiphyViewer.scss"


const Search = (props) => {
  const setGifs = props.setGifs;
  const [searchTerm, setSearchTerm] = useState("");

  const GIPHY_URL = "https://api.giphy.com/v1/gifs";
  const API_KEY = "zS8ylSqoBUwvEZj2Vs15oVsNQ7eJydkX";

  const searchGifs = () => {
    if (!searchTerm.trim()) {
      alert("Please enter a search term");
      return;
    }

    axios
      .get(`${GIPHY_URL}/search?api_key=${API_KEY}&q=${searchTerm.trim()}`)
      .then((response) => {
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    searchGifs();
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      searchGifs();
    }
  };

  return (
    <div className="d-flex align-items-center my-4 search-container">
      <Form.Control
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="Search for gifs..."
      />
      <Button
        className="ms-2 search-button neon-blue"
        variant="primary"
        onClick={handleClick}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
