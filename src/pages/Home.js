import React from 'react'; // Importing React
import { Container } from 'react-bootstrap'; // Importing Container from react-bootstrap for layout
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation

const Home = () => {
    return (
        <Container className="text-center mt-5 py-5"> {/* Centered container with margin and padding */}
            <h1>Welcome to the Country Explorer</h1> {/* Main heading for the homepage */}
            {/* Add the Giphy iframe here */}
            <iframe 
                src="https://giphy.com/embed/xT5LMEZCu8g8vZiAgM" // Source of the Giphy iframe
                width="480" // Width of the iframe
                height="367" // Height of the iframe
                frameBorder="0" // Border setting for the iframe
                allowFullScreen // Allowing full screen mode for the iframe
                title="Giphy GIF" // Title for accessibility
            ></iframe>
            <p className="mt-4"> {/* Paragraph with margin on top */}
                <Link to="/countries" className="text-decoration-none fs-1 text-body-secondary"> {/* Navigation link to countries page */}
                   CLICK HERE FOR COUNTRIES {/* Link text */}
                </Link>
            </p>
        </Container>
    );
};

export default Home; // Exporting the Home component for use in other parts of the application
