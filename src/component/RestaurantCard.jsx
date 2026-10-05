import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {

  return (
    <div className="restaurant-card">

      <div className="restaurant-image">
        {restaurant.emoji}
      </div>

      <div className="restaurant-content">

        <h3>{restaurant.name}</h3>

        <p>{restaurant.cuisine}</p>

        <div className="restaurant-info">
          <span>⭐ {restaurant.rating}</span>
          <span>🕒 {restaurant.deliveryTime}</span>
        </div>

        <p className="restaurant-description">
          {restaurant.description}
        </p>

        <Link
          to={`/menu/${restaurant.id}`}
          className="primary-btn"
        >
          View Menu
        </Link>

      </div>

    </div>
  );
}