import React from 'react';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';

const Home = ({ searchTerm }) => (
  <div className="home">
    <Banner />
    <ProductList searchTerm={searchTerm} />
  </div>
);

export default Home;
