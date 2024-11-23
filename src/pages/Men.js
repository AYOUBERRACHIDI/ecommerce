import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiData from '../api.json';
import './Men.css';

const Men = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const filteredProducts = apiData.sneakers.filter(product => product.gender.includes('men'));
    setMenProducts(filteredProducts);
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = menProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageCount = Math.ceil(menProducts.length / productsPerPage);

  return (
    <div className="products-container">
      <h1>Men's Sneakers</h1>
      <div className="products-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card-link1">
              <div className="product-card">
                <img src={product.grid_picture_url} alt={product.name} className="product-image" />
                <h2>{product.name}</h2>
                {/* <p>{product.details}</p> */}
                <p>{(product.retail_price_cents / 100).toFixed(2)} €</p>
              </div>
            </Link>
          ))
        ) : (
          <p>Aucun produit disponible pour le moment.</p>
        )}
      </div>

      <div className="pagination">
        {[...Array(pageCount).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            className={`page-button ${currentPage === pageNumber + 1 ? 'active' : ''}`}
            onClick={() => paginate(pageNumber + 1)} style={{color:"white"}}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Men;
