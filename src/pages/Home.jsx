import { Link } from "react-router-dom";
import { restaurants, foods } from "../data/foodData";
import RestaurantCard from "../component/RestaurantCard";
import ProductCard from "../component/ProductCard";

export default function Home() {

  return (
    <main>

      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            Delicious food • Fast delivery
          </span>

          <h1>
            Your favourite food,
            <span> delivered fresh.</span>
          </h1>

          <p>
            Discover restaurants, order your favourite meals
            and track your delivery from one place.
          </p>

          <Link
            to="/restaurants"
            className="hero-btn"
          >
            Explore Restaurants
          </Link>

        </div>

        <div className="hero-food">
          🍕
        </div>

      </section>


      <section className="section">

        <div className="section-heading">

          <div>
            <span className="section-tag">
              Discover
            </span>

            <h2>Popular Restaurants</h2>
          </div>

          <Link to="/restaurants">
            View All →
          </Link>

        </div>

        <div className="restaurant-grid">

          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}

        </div>

      </section>


      <section className="section">

        <div className="section-heading">

          <div>
            <span className="section-tag">
              Customers love
            </span>

            <h2>Popular Food</h2>
          </div>

        </div>

        <div className="product-grid">

          {foods.slice(0, 6).map((food) => (
            <ProductCard
              key={food.id}
              food={food}
            />
          ))}

        </div>

      </section>

    </main>
  );
}