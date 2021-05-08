import React from 'react';
import './ProductScreen.css';

const ProductScreen = () => {
  return (
    <div className="productscreen">
      {/* left */}
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="Product name"
          />
        </div>
        <div className="left__info">
          <p className="left__name">PlayStation 5</p>
          <p>Price: $300.00</p>
          <p>
            Description: Test Product Test Product Test Product Test Product
            Test Product
          </p>
        </div>
        {/* right */}
        <div className="productscreen__right">
          <div className="right__info">
            <p>
              Price:
              <span>$300.00</span>
            </p>
            <p>
              Status:
              <span>In Stock</span>
            </p>
            <p>
              Qty
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </p>
            <p>
              <button type="button">Add To Cart</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
// screen divide in to two parts

export default ProductScreen;
