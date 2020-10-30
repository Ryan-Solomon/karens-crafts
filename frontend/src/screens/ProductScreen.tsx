import React, { FC } from 'react';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from './../components/Rating';
import products from './../products';
import { RouteComponentProps } from 'react-router';

type TParams = { id: string };

function ProductScreen({ match }: RouteComponentProps<TParams>) {
  const product = products.find((p) => p._id === match.params.id);
  return <div>Product</div>;
}

export default ProductScreen;
