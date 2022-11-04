import React from 'react';
import { Container, Row, Col } from "reactstrap";

const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-10">
              <h3 className="text-centerk">Event<span className="text-warning">Details</span></h3>
              <p className="text-muted">About Us</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
             sunt in culpa qui officia deserunt mollit anim id est laborum.
             </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;