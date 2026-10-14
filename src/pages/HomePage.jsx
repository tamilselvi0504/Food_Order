
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-tagline">🔥 FRESH • HOT • DELICIOUS</p>

          <h1>
            Welcome to <span>FoodieShop</span>
          </h1>

          <p className="hero-description">
            Cravings don't wait. Enjoy your favourite meals,
            bursting with flavour and delivered to your doorstep.
          </p>

          <button
            className="explore-btn"
            onClick={() => navigate("/menu")}
          >
            Explore Menu <span>→</span>
          </button>
        </div>

        <div className="hero-banner">
          <img
            src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=85"
            alt="Delicious spicy noodles"
            className="banner-img"
          />
          <div className="image-label">MADE TO SATISFY YOUR CRAVINGS</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
