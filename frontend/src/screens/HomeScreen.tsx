import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { ProductData } from '../types/types';
import useFetchProducts from './../components/hooks/useFetchProducts';

const HomeScreen = () => {
  const { products } = useFetchProducts();

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products!.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />;
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
