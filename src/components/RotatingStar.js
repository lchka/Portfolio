import React from 'react';
import { Col } from 'react-bootstrap';
import "../styles/RotatingStar.scss";  // Make sure to link your CSS file

const RotatingStar = () => {
  return (
    <Col md={6}>
      <div className="rightSide">
        <div className="neon-star"></div>
      </div>
    </Col>
  );
};

export default RotatingStar;
