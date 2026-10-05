import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {

  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();

  return (
    <div className="cart-item">

      <div className="cart-food-icon">
        {item.emoji}
      </div>

      <div className="cart-item-info">

        <h3>{item.name}</h3>

        <p>₹{item.price}</p>

      </div>

      <div className="quantity-controls">

        <button
          onClick={() => decreaseQuantity(item.id)}
        >
          −
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => increaseQuantity(item.id)}
        >
          +
        </button>

      </div>

      <strong>
        ₹{item.price * item.quantity}
      </strong>

      <button
        className="remove-btn"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>

    </div>
  );
}