import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import products from '../products';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch_products = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetch_products();
  }, []);
  return (
    <Fragment>
      <Container>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
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
