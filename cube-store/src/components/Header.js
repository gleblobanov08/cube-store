import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Components.css";

function Header() {
  const navStyle = {
    listStyleType: 'none'
  }
  return (
    <header>
        <h1>Cubes4U</h1>
        <nav>
          <ul>
            <div>
              <li style={navStyle}><Link to="/">Home</Link></li>
            </div>
            <div>
              <li style={navStyle}><Link to="/products">Products</Link></li>
            </div>
            <div>
              <li style={navStyle}><Link to="/cart">Cart</Link></li>
            </div>
          </ul>
        </nav>
    </header>
  );
}

export default Header;