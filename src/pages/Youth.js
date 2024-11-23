import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import apiData from '../api.json'; 
import './Youth.css';

const Youth = () => {
  const [youthProducts, setYouthProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  
  // Pour récupérer la page courante depuis l'URL (par exemple, /youth?page=2)
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pageFromUrl = queryParams.get('page');
  const page = pageFromUrl ? parseInt(pageFromUrl) : 1;

  useEffect(() => {
    const filteredProducts = apiData.sneakers.filter(product => product.gender.includes('youth'));
    setYouthProducts(filteredProducts);
  }, []);

  useEffect(() => {
    setCurrentPage(page);  // Définit la page courante en fonction de l'URL
  }, [page]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = youthProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageCount = Math.ceil(youthProducts.length / productsPerPage);

  return (
    <div className="products-container">
      <h1>Youth's Sneakers</h1>
      <div className="products-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
              <img src={product.grid_picture_url} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.details}</p>
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

export default Youth;
