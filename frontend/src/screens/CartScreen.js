import React from 'react';
import './CartScreen.css';

// Components
import CartItem from '../components/CartItem';

const CartScreen = () => {
  return (
    <div>
      <div className="cartscreen">
        {/* left */}
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </div>
        {/* rigth */}
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal (10) items</p>
            <p>$1100.10</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
// screen divide in to two parts
export default CartScreen;
