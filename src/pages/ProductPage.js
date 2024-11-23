import React from 'react';
import ProductDetails from '../components/ProductDetails';

const ProductPage = ({ onAddToCart }) => {
  return <ProductDetails onAddToCart={onAddToCart} />;
};

export default ProductPage;
