import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { Link as ScrollLink, Element } from "react-scroll";
import "../styles/Home.scss";

const Home = () => {
  const [isNameVisible, setIsNameVisible] = useState(false); // State for H1 visibility
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false); // State for scroll button visibility
  const [showLearnButton, setShowLearnButton] = useState(false); // State for Learn More button visibility

  const [isCardBlueVisible, setIsCardBlueVisible] = useState(false);
  const [isCardPinkVisible, setIsCardPinkVisible] = useState(false);
  const [isCardPurpleVisible, setIsCardPurpleVisible] = useState(false);

  // Handle H1 animation and scroll button visibility
  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setIsNameVisible(true); // Trigger animation for the H1
    }, 800); // Delay for H1 animation to start

    const buttonTimer = setTimeout(() => {
      setIsScrollButtonVisible(true); // Show the scroll button after H1 animation finishes
      setShowLearnButton(true); // Make the Learn More button visible after the scroll button is shown
    }, 1600); // Adjust this to match the duration of the H1 animation (e.g., 800ms delay + 800ms animation)

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  // Handle Card animations on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".popUpCards");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          // Sequentially set each card visible with delays
          setTimeout(() => setIsCardBlueVisible(true), 600);
          setTimeout(() => setIsCardPinkVisible(true), 1500);
          setTimeout(() => setIsCardPurpleVisible(true), 2500);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="content-container py-1">
        {/* Static header */}
        <h3 className="py-3 mt-4 text-left slide-in-left">Welcome to my portfolio</h3>

        {/* Animated H1 */}
        <h1
          className={`py-3 text-right slide-in-right ${isNameVisible ? "start" : ""}`}
        >
          My name is Laura '<span className="color-swap">Lili</span>' Hofmanova
        </h1>

        {/* Scroll link button */}
        <div
          className={`learnButton d-flex py-3 justify-content-center ${
            isScrollButtonVisible ? "visible" : "hidden"
          }`}
        >
          <ScrollLink to="popUpCards" smooth={true} duration={500}>
            <Button
              className={`my-5 btn btn-light fs-6 custom-button ${showLearnButton ? "visible flip-in" : ""}`}
            >
              <div className="d-flex flex-column align-items-center">
                <span className="fw-semibold">Wanna learn more about me?</span>
                <FaChevronDown size={22} />
              </div>
            </Button>
          </ScrollLink>
        </div>

        {/* Cards Section */}
        <Element name="popUpCards" className="popUpCards my-4 py-5">
          <h3 className="py-3 my-4 text-white text-left slide-in-left">I am...</h3>
          <Row className="my-5 py-5">
            <Col>
              <Card
                className={`card-blue rounded-5 mx-5 text-white ${isCardBlueVisible ? "scale-in" : ""}`}
              >
                <Card.Body>
                  <Card.Title>I am...</Card.Title>
                  <Card.Text className="fs-1 extra">
                    a 23 Years Old, Creative Coding Student. Living in Westmeath, Ireland!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-pink rounded-5 mx-5 text-white ${isCardPinkVisible ? "scale-in" : ""}`}
              >
                <Card.Body>
                  <Card.Title>I am...</Card.Title>
                  <Card.Text className="fs-1 extra">
                  originally from Slovakia. Making me fluent in four different languages!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-purple rounded-5 mx-5 text-white ${isCardPurpleVisible ? "scale-in" : ""}`}
              >
                <Card.Body>
                  <Card.Title>I am...</Card.Title>
                  <Card.Text className="fs-1 extra">
                    currently looking for <span className="color-swap">internships</span>.
                    With experience in many coding languages!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Element>
      </div>
    </div>
  );
};

export default Home;
