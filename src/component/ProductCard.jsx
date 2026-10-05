import { useCart } from "../context/CartContext";

export default function ProductCard({ food }) {

  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <div className="food-image">
        {food.emoji}
      </div>

      <div className="product-content">

        <span className="category">
          {food.category}
        </span>

        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <div className="product-bottom">

          <strong>₹{food.price}</strong>

          <button
            className="add-btn"
            onClick={() => addToCart(food)}
          >
            + Add
          </button>

        </div>

      </div>

    </div>
  );
}