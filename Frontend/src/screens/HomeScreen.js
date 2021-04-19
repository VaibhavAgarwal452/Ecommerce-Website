import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          {Products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default HomeScreen;
