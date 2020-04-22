import React from "react";
import { Link } from "react-router-dom";

import Header from "../Components/Header";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {

  return (
    <Container>

      <Header></Header>

      <Row>
        <Col sm={12} className="text-center">
          <h3>Card Sharks!</h3>
          <h4>A React Demo using Okta</h4>
        </Col>
      </Row>

      <br></br>

      <Row >
        <Col sm={12} className="text-center">
          <Card style={{ width: "21.5em", margin: "0 auto" }}>
            <Card.Header>
              Already have an Okta Account?
            </Card.Header>
            <Card.Body>
              <Link to='/Game'>Play Now</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};
export default Home;
