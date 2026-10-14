// Cart.jsx
import React from "react";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
