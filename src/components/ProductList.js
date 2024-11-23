import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import CategoryNavbar from './CategoryNavbar';
import './ProductList.css'
import apiData from '../api.json';

const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); 

  useEffect(() => {
    setProducts(apiData.sneakers);
    setFilteredProducts(apiData.sneakers);

    const uniqueCategories = [
      ...new Set(apiData.sneakers.flatMap((sneaker) => sneaker.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.designer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  const handleCategorySelect = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category.includes(category)));
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); 
  };

  return (
    <div>
      <CategoryNavbar categories={categories} onSelectCategory={handleCategorySelect} />
      <div className="product-list">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visibleCount < filteredProducts.length && (
        <button onClick={handleShowMore} className="show-more-button">
          Voir plus
        </button>
      )}
    </div>
  );
};

export default ProductList;
