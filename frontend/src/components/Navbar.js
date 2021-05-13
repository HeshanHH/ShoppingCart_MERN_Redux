import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2> Shopping Cart</h2>
      </div>

      {/* liks */}
      {/* https://reactrouter.com/web/api/Link */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              {/* Cart <span className="cartlogo__badge">{getCartCount()}</span> */}
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/" className="btn btn-light" style={{ color: 'black' }}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/adminproduct">AddminProduct</Link>
        </li>
        <li>
          <Link to="/register" className="btn btn-success">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login" className="btn btn-primary">
            Sign In
          </Link>
        </li>
      </ul>

      {/* hamberger menu */}

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
