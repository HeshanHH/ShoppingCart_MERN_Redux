import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      {/* Image */}
      <img src={imageUrl} alt={name} />

      {/* produt info */}
      <div className="product__info">
        <p className="info__name">
          <b>{name}</b>
        </p>
        <p className="info__description">{description.substring(0, 100)}...</p>
        <p className="info__price">${price}</p>
        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
