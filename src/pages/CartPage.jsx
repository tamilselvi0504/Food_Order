
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({ cartItems, onOrderItem }) => {
  const navigate = useNavigate();

  const handleOrderNow = (item) => {
    onOrderItem(item);
    navigate("/order");
  };

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item, index) => (
            <div className="cart-product-card" key={`${item.id}-${index}`}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-product-image"
              />

              <div className="cart-product-info">
                <h3>{item.name}</h3>
                <p className="cart-product-price">₹{item.price}</p>

                <button
                  className="order-now-btn"
                  onClick={() => handleOrderNow(item)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
