import { Link } from "react-router-dom";
import CartItem from "../component/CartItem";
import { useCart } from "../context/CartContext";

export default function Cart() {

  const {
    cart,
    cartTotal
  } = useCart();

  if (cart.length === 0) {

    return (
      <main className="empty-state page">

        <div className="empty-icon">
          🛒
        </div>

        <h1>Your cart is empty</h1>

        <p>
          Add some delicious food to continue.
        </p>

        <Link
          to="/restaurants"
          className="primary-btn"
        >
          Explore Food
        </Link>

      </main>
    );
  }

  const deliveryFee = 40;
  const grandTotal = cartTotal + deliveryFee;

  return (
    <main className="page">

      <div className="page-header">
        <span className="section-tag">
          Your order
        </span>

        <h1>Shopping Cart</h1>
      </div>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

        </div>


        <div className="summary-card">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Food total</span>
            <strong>₹{cartTotal}</strong>
          </div>

          <div className="summary-row">
            <span>Delivery fee</span>
            <strong>₹{deliveryFee}</strong>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <strong>₹{grandTotal}</strong>
          </div>

          <Link
            to="/checkout"
            className="checkout-btn"
          >
            Proceed to Checkout
          </Link>

        </div>

      </div>

    </main>
  );
}