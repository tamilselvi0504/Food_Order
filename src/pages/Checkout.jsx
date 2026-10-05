import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Checkout() {

  const { cart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: user?.name || "",
    phone: "",
    address: "",
    city: ""
  });

  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  const [error, setError] = useState("");

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  const deliveryFee = 40;
  const total = cartTotal + deliveryFee;

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const placeOrder = (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.city
    ) {
      setError("Please fill all delivery details.");
      return;
    }

    const order = {
      id: `FF${Date.now()}`,
      items: cart,
      total,
      customer: form,
      paymentMethod,
      status: "Order Placed",
      createdAt: new Date().toLocaleString()
    };

    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([order, ...oldOrders])
    );

    clearCart();

    navigate(`/track/${order.id}`);
  };

  return (
    <main className="page">

      <div className="page-header">
        <span className="section-tag">
          Almost there
        </span>

        <h1>Checkout</h1>
      </div>

      <div className="checkout-layout">

        <form
          className="checkout-form"
          onSubmit={placeOrder}
        >

          <h2>Delivery Details</h2>

          <label>Name</label>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label>Phone</label>

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />

          <label>Address</label>

          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter delivery address"
          />

          <label>City</label>

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Enter city"
          />


          <h2>Payment Method</h2>

          <div className="payment-options">

            <label>
              <input
                type="radio"
                value="Cash on Delivery"
                checked={
                  paymentMethod === "Cash on Delivery"
                }
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              UPI
            </label>

            <label>
              <input
                type="radio"
                value="Card"
                checked={paymentMethod === "Card"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Card
            </label>

          </div>

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="checkout-btn"
          >
            Place Order • ₹{total}
          </button>

        </form>


        <div className="summary-card">

          <h2>Your Items</h2>

          {cart.map((item) => (
            <div
              className="summary-item"
              key={item.id}
            >
              <span>
                {item.emoji} {item.name} × {item.quantity}
              </span>

              <strong>
                ₹{item.price * item.quantity}
              </strong>
            </div>
          ))}

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

        </div>

      </div>

    </main>
  );
}