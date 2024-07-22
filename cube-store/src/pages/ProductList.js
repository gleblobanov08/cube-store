import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from '../data/products';
import "../styles/ProductList.css";

export default function ProductList () {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  let filters = ["2x2", "3x3", "4x4", "sq-1", "mega", "non-wca"];
  let companies = ["GAN", "MoYu", "QiYi", "YJ"];

  const handleFilterClick = (selectedEvent) => {
    if (selectedFilters.includes(selectedEvent)) {
      filters = selectedFilters.filter((el) => el !== selectedEvent);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedEvent]);
    }
  };

  const handleCompanyClick = (selectedCompany) => {
    if (selectedCompanies.includes(selectedCompany)) {
      companies = selectedCompanies.filter((el) => el !== selectedCompany);
      setSelectedCompanies(companies);
    } else {
      setSelectedCompanies([...selectedCompanies, selectedCompany]);
    }
  };

  const productCard = (product) => (
    <Link to={`/product/${product.id}`}>
    <div className="card-info">
      <img src={product.img[0]} alt="grid img" />
      <h2>{product.name}</h2>
      <div className="detail-info">
        <h2>$ {product.price}<sup>99</sup></h2>
        <button>buy now</button>
      </div>
    </div>
  </Link>
  )

  useEffect(() => {
    filterProducts();
  });

  const filterProducts = () => {
    if (selectedFilters.length > 0 || selectedCompanies.length > 0) {
      let tempCubes = [...products];
      if (selectedFilters.length > 0) {
        tempCubes = tempCubes.filter((item) => selectedFilters.includes(item.event));
      }
      if (selectedCompanies.length > 0) {
        tempCubes = tempCubes.filter((item) => selectedCompanies.includes(item.company));
      }
      setFilteredProducts(tempCubes);
      setCurrentPage(1);
    } else {
      setFilteredProducts([...products]);
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = [...filteredProducts].slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="filters">
        {filters.map((event) => {
          return (
          <button onClick={() => handleFilterClick(event)} className={`button ${selectedFilters?.includes(event) ? "active" : ""}`}>{event}</button>
          );
        })}
        <br/>
        {companies.map((company) => {
          return (
            <button onClick={() => handleCompanyClick(company)} className={`button ${selectedCompanies?.includes(company) ? "active" : ""}`}>{company}</button>
          );
        })}
      </div>
      <div className="products">
        {currentProducts.map(productCard)}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <div className="news">
        <h2>Latest speedcubing news</h2>
        <div className="news-grid">
          <div className="news-item">
            <h3>Magnetic Ivy Cube release</h3>
            <p>QiYi have just released a magnetic ivy cube. But we sell only WCA puzzles, 
              so I advice you to shop on cccstore.ru</p>
          </div>
          <div className="news-item">
            <h3>4x4 World Record single by Max Park</h3>
            <p>Max just got a 15.83s solve in 2024 Nub Open Yucaipa. You can watch it on YouTube.</p>
          </div>
        </div>
      </div>
    </div>
  );
};