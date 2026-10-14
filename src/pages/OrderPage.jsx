
import React, { useEffect, useState } from "react";
import "./OrderPage.css";

const OrderPage = ({ orderItems = [] }) => {
  const [items, setItems] = useState(
    orderItems.map((item) => ({ ...item, quantity: item.quantity || 1 }))
  );
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    setItems(
      orderItems.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }))
    );
    setOrderPlaced(false);
  }, [orderItems]);

  const changeQuantity = (id, change) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (items.length > 0) {
      setOrderPlaced(true);
    }
  };

  return (
    <div className="order-page">
      <h2>🧾 Your Order</h2>

      {items.length === 0 ? (
        <p>No items selected. Please choose an item from your cart.</p>
      ) : (
        <>
          <div className="order-items">
            {items.map((item, index) => (
              <div className="order-item-card" key={`${item.id}-${index}`}>
                <img src={item.image} alt={item.name} />

                <div className="order-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>

                  <div className="quantity-control">
                    <button
                      onClick={() => changeQuantity(item.id, -1)}
                      disabled={orderPlaced || item.quantity === 1}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => changeQuantity(item.id, 1)}
                      disabled={orderPlaced}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <p className="item-subtotal">
                    Subtotal: ₹{item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="order-total">Total Amount: ₹{totalPrice}</h3>

          <button
            className="place-order-btn"
            onClick={handlePlaceOrder}
            disabled={orderPlaced}
          >
            {orderPlaced ? "Order Placed ✓" : "Place Order"}
          </button>

          {orderPlaced && (
            <div className="order-success" role="status">
              <h3>🎉 Order Placed Successfully!</h3>
              <p>Your order has been confirmed.</p>
              <p>Final Amount: ₹{totalPrice}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OrderPage;
