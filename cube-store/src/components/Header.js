import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Components.css";
import { ThemeContext } from '../components/ThemeContext';

function Header () {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
      <button onClick={toggleTheme} className="theme-switcher">
        {theme === 'light' ? (
          <p>Day</p>
        ) : (
        <p>Night</p>
        )}
      </button>
    </header>
  );
};

export default Header;