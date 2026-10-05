import React, { useState } from "react";
import { restaurants } from "../data/foodData";
import RestaurantCard from "../component/RestaurantCard";

export default function Restaurants() {
  const [search, setSearch] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h1>Restaurants</h1>

      <input
        type="text"
        placeholder="Search restaurants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="restaurant-grid">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </div>
    </div>
  );
}