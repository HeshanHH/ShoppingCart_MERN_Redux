import React from 'react';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">{/* Display prodcts */}</div>
    </div>
  );
};

export default HomeScreen;
