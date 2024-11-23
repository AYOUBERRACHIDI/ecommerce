import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; 

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="product-card-link1">
    <div className="product-card1">
      <img src={product.main_picture_url} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{(product.retail_price_cents / 100).toFixed(2)} €</p>
      
    </div>
  </Link>
);

export default ProductCard;
