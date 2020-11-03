import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from './../actions/productActions';
import { ProductData } from '../types/types';
import Message from './../components/Message';
import Loader from './../components/Loader';

type DefaultState = {
  productList: ProductList;
};

type ProductList = {
  loading: boolean;
  products?: ProductData[];
  error?: undefined;
};

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state: DefaultState) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          <h3>{error}</h3>
        </Message>
      ) : (
        <Row>
          {products!.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />;
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
