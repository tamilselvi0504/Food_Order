import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { restaurants, foods, categories } from "../data/foodData";
import ProductCard from "../component/ProductCard";

export default function Menu() {
  const { id } = useParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const restaurant = restaurants.find(
    (item) => item.id === Number(id)
  );

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  const restaurantFoods = foods.filter(
    (food) => food.restaurantId === restaurant.id
  );

  const filteredFoods = restaurantFoods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || food.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container">
      <div className="menu-header">
        <h1>{restaurant.emoji} {restaurant.name}</h1>
        <p>{restaurant.cuisine}</p>
        <p>⭐ {restaurant.rating} • {restaurant.deliveryTime}</p>
      </div>

      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="category-list">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={category === item ? "active-category" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredFoods.map((food) => (
          <ProductCard
            key={food.id}
            food={food}
          />
        ))}
      </div>
    </div>
  );
}