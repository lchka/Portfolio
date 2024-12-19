import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.scss";
import Me from "../assets/ime.png"; // Image path

const About = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isCardMoved, setIsCardMoved] = useState(false); // State for card movement
  const [isImageVisible, setIsImageVisible] = useState(false); // State for image fade-in
  const [hasScrolledToCardSection, setHasScrolledToCardSection] = useState(false); // State for tracking scroll

  // Create a ref for the card section
  const cardSectionRef = useRef(null);

  // Function to scroll to the card section and trigger animations
  const scrollToCardSection = () => {
    if (cardSectionRef.current) {
      // Get the height of the window and the card section
      const windowHeight = window.innerHeight;
      const cardSectionHeight = cardSectionRef.current.offsetHeight;
  
      // Calculate the offset to center the card section in the middle of the window
      const offset = cardSectionRef.current.getBoundingClientRect().top + window.scrollY - (windowHeight - cardSectionHeight) / 2;
  
      // Scroll to the calculated position
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
  
      // After scroll, set the state to trigger animations
      setHasScrolledToCardSection(true);
    }
  };
  

  // Use an effect to trigger the card movement and image fade-in after the scroll
  useEffect(() => {
    if (hasScrolledToCardSection) {
      // Trigger card movement after scroll
      const cardMoveTimer = setTimeout(() => {
        setIsCardMoved(true);
      }, 1000); // Delay to allow scroll animation to finish

      // Trigger image fade-in after the card moves
      const imageFadeTimer = setTimeout(() => {
        setIsImageVisible(true);
      }, 1500); // Delay to make sure the card moves before showing the image

      return () => {
        clearTimeout(cardMoveTimer);
        clearTimeout(imageFadeTimer);
      };
    }
  }, [hasScrolledToCardSection]); // Depend on the scroll state

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsVisible1(true);
    }, 500); // Delay for the first h4

    const timer2 = setTimeout(() => {
      setIsVisible2(true);
    }, 1500); // Delay for the second h4 (1 second after the first)

    const timer3 = setTimeout(() => {
      setIsVisible3(true);
    }, 2500); // Delay for the third h4 (1 second after the second)

    const timer4 = setTimeout(() => {
      setIsButtonVisible(true);
    }, 3000); // Delay for the button (1 second after the third h4)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={12} className="about">
          <h1 className={`animatedH1 ${isVisible1 ? "fadeInFlipBounce" : ""}`}>
            About Me
          </h1>
          <h4
            className={`slide-in-left-one py-4 pb-5 left ${
              isVisible1 ? "fadeIn" : ""
            }`}
          >
            As mentioned I am a 23 year old Student!
          </h4>
          <h4
            className={`slide-in-right-two py-4 pb-5 ${
              isVisible2 ? "fadeIn" : ""
            }`}
          >
            I'm from Slovakia, living in Ireland since 2008-
          </h4>
          <h4
            className={`slide-in-left-one py-4 pb-5 ${
              isVisible3 ? "fadeIn" : ""
            }`}
          >
            This means I speak English, Slovak, Czech, and modern Russian!
          </h4>
          <div
            className={`learnButton d-flex justify-content-center ${
              isButtonVisible ? "visible flip-in" : ""
            }`}
          >
            <Button className="neon-white my-5" onClick={scrollToCardSection}>
              Read More About Me
            </Button>
          </div>
        </Col>
      </Row>

      {/* After scroll, start the animation of the card */}
      <Row>
        <Col md={6}>
          <div className="leftSide">
            <Card
              className={`my-5 mx-3 ${isCardMoved ? "move-card-right" : ""}`}
            >
              <Card.Body>
                <Card.Title className="px-5 py-3 fs-3">
                  More about Me!
                </Card.Title>

                <Card.Text className="px-5">
                  "My name is Laura Hofmanova, though I go by Lili. I was born
                  in Slovakia shortly after the country transitioned from
                  communism. Due to registration limitations at the time, my
                  mother chose the name Laura as a close alternative.
                  <br />
                  <br /> At the age of six, I moved to Ireland. Naturally, this
                  was a challenging transition as I had to learn a new language
                  and adapt to different customs. This experience required
                  resilience and adaptability, and it has played a significant
                  role in shaping the person I am today.
                  <br />
                  <br /> I am incredibly grateful for the amazing people around
                  me who have supported my personal growth. As you can probably
                  tell, I thrive in the company of others!
                  <br />
                  <br /> In my free time, I enjoy crocheting, playing games, and
                  spending time with my pets. However, spare time is limited, as
                  I’m often busy with some form of work!
                  <br />
                  <br /> Overall, I am a compassionate individual, always eager
                  to support my peers and friends in overcoming any challenges
                  they may face."
                </Card.Text>
                <Card.Text className="px-5">
                  <blockquote className="blockquote text-end mt-4">
                    <p>"Go your own way."</p>
                    <footer className="blockquote-footer mt-1">
                      Fleetwood Mac
                    </footer>
                  </blockquote>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className="d-flex justify-content-center" md={6}>
          <div
            className={`rightSide py-5 my-5 ${
              isImageVisible ? "fadeInImage" : ""
            }`}
            ref={cardSectionRef}
          >
            <img
              src={Me}
              alt="Me"
              style={{ width: "450px", height: "auto" }}
              className="my-image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
