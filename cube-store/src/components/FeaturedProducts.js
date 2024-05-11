import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Components.css";

function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      img: "../assets/1-1.jpeg",
      name: "GAN 14 M Maglev UV 3x3",
      price: "69"
    },
    {
      id: 2,
      img: "../assets/2-1.jpeg",
      name: "MFJS MeiLong 3x3 M",
      price: "7"
    },
    {
      id: 3,
      img: "../assets/3-1.jpeg",
      name: "QiYi MS 3x3",
      price: "10"
    }
  ]
  return (
    <section id="featured">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="product-list">
          {featuredProducts.map(product => (
            <Link to={`/product/${product.id}`}>
            <div key={product.id} className="product">
              <img src={product.img} alt="featured product" />
              <h3>{product.name}</h3>
              <h4>${product.price}</h4>
              <button>Buy</button>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;