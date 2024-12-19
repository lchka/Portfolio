import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { Link as ScrollLink, Element } from "react-scroll";
import "../styles/Home.scss";
import { useNavigate, useLocation } from "react-router-dom"; // Import the useNavigate hook

const Home = () => {
  const [isNameVisible, setIsNameVisible] = useState(false); // State for H1 visibility
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false); // State for scroll button visibility
  const [showLearnButton, setShowLearnButton] = useState(false); // State for Learn More button visibility
  const [isButtonsVisible, setIsButtonsVisible] = useState(false); // Controls the visibility of the buttons
// Inside the Home component
const location = useLocation();
  const [isCardBlueVisible, setIsCardBlueVisible] = useState(false);
  const [isCardPinkVisible, setIsCardPinkVisible] = useState(false);
  const [isCardPurpleVisible, setIsCardPurpleVisible] = useState(false);
  const [hasScrolledToProjects, setHasScrolledToProjects] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate function
  const [hasScrolledToMiddle, setHasScrolledToMiddle] = useState(false); // New state to track scrolling

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

  // Handle Card animations on scroll and center the middle-section
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".popUpCards");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          // Sequentially set each card visible with delays
          setTimeout(() => setIsCardBlueVisible(true), 600);
          setTimeout(() => setIsCardPinkVisible(true), 2000);
          setTimeout(() => setIsCardPurpleVisible(true), 3000);

          // After the last card animation is complete, scroll to the middle section, but only if not already done
          if (!hasScrolledToMiddle) {
            setTimeout(() => {
              const middleSection = document.querySelector(".middle-section");
              if (middleSection) {
                const middleOffset =
                  middleSection.offsetTop -
                  (window.innerHeight - middleSection.offsetHeight) / 2; // Center the element vertically
                window.scrollTo({
                  top: middleOffset,
                  behavior: "smooth",
                });
                setHasScrolledToMiddle(true); // Mark that scrolling to the middle section has occurred
              }
            }, 5000); // Adjust this timing to match when the animation finishes
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledToMiddle]); // Dependency on hasScrolledToMiddle state

  useEffect(() => {
    if (hasScrolledToProjects) {
      const fadeTimer = setTimeout(() => {
        setIsProjectsVisible(true); // Trigger the fade-in effect after scroll
      }, 500); // Adjust the delay based on how long you want to wait before fading in

      return () => clearTimeout(fadeTimer);
    }
  }, [hasScrolledToProjects]);

  useEffect(() => {
    if (hasScrolledToMiddle && !hasScrolledToProjects) {
      const timer = setTimeout(() => {
        const projectsSection = document.querySelector(".projects-section");
        if (projectsSection) {
          window.scrollTo({
            top: projectsSection.offsetTop,
            behavior: "smooth",
          });
          setHasScrolledToProjects(true);
        }
      }, 3000); // Adjust this timing to match when the animation finishes

      return () => clearTimeout(timer);
    }
  }, [hasScrolledToMiddle, hasScrolledToProjects]);

  useEffect(() => {
    if (location.pathname === "/projects" && location.hash === "#projects") {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  const handleNavigate = () => {
    navigate("/projects"); // Navigate to the Projects page first
    setTimeout(() => {
      // Ensure the page loads first, then scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  
  return (
    <div className="home-container">
      <div className="content-container py-1">
        {/* Static header */}
        <h3 className="py-3 mt-4 text-left slide-in-left">
          Welcome to my portfolio
        </h3>

        {/* Animated H1 */}
        <h1
          className={`py-3 text-right slide-in-right ${
            isNameVisible ? "start" : ""
          }`}
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
              className={`my-5 btn btn-light fs-6 custom-button ${
                showLearnButton ? "visible flip-in" : ""
              }`}
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
          <h3 className="py-3 my-4 text-white text-left slide-in-left">
            I am...
          </h3>
          <Row className="my-5 py-5">
            <Col>
              <Card
                className={`card-blue rounded-5 mx-5 text-white ${
                  isCardBlueVisible ? "scale-in" : ""
                }`}
              >
                <Card.Body>
                  <Card.Title>I am...</Card.Title>
                  <Card.Text className="fs-1 extra">
                    a <span className="color-swap">23 Year Old</span>, Creative
                    Coding Student. Living in Westmeath, Ireland!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-pink rounded-5 mx-5 text-white ${
                  isCardPinkVisible ? "scale-in" : ""
                }`}
              >
                <Card.Body>
                  <Card.Title>I am...</Card.Title>
                  <Card.Text className="fs-1 extra">
                    originally from <span className="color-swap">Slovakia</span>
                    . Making me fluent in four different languages!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-purple rounded-5 mx-5 text-white ${
                  isCardPurpleVisible ? "scale-in" : ""
                }`}
              >
                <Card.Body>
                  <Card.Title>I am...</Card.Title>
                  <Card.Text className="fs-1 extra">
                    currently{" "}
                    <span className="color-swap">looking for internships</span>.
                    With experience in many coding languages!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Element>

        {/* Middle Section */}
        <div style={{ marginTop: "200px", marginBottom: "70px" }}>
          <div
            className={`middle-section py-5 text-center ${
              hasScrolledToMiddle ? "typewriter" : ""
            }`}
          >
            <h1>I am the ideal candidate</h1>
          </div>
        </div>

        {/* Last Section */}
        <div
          className={`projects-section my-5 ${
            isProjectsVisible ? "visible" : ""
          }`}
        >
          <h1>Do you want to see my projects?</h1>

          <div
            style={{ marginBottom: "100px" }}
            className="d-flex justify-content-center"
          >
            <button
  className="btn rounded-4 project-btn neon-pink mx-3"
  onClick={handleNavigate}
>
  Yes!
</button>
<button
  className="btn project-btn neon-blue rounded-4 mx-3"
  onClick={handleNavigate}
>
  No!
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
