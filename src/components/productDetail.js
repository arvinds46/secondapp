import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function ProductDetail({product}) {
    return ( <div>
        <h1>Product Detail</h1>
        <ListGroup>
            <ListGroup.Item>Name: {product.name}</ListGroup.Item>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
            <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
            <ListGroup.Item>Rating: {product.rating}</ListGroup.Item>
        </ListGroup>
    </div> );
}

export default ProductDetail;