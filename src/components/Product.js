import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; // Import product data

function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <div className="card">
        <img src={process.env.PUBLIC_URL + product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
