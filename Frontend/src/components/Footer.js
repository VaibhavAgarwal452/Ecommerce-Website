import React from 'react';
import { Conatiner, Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>CopyRight &copy;</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
