import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row></Row>
        <Col className="text-center" py-3>
          Copyright &copy; ProShopV1
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
