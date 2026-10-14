// component/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h2>🍴 FoodieShop</h2>
    <ul className="navbarul">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/order">Order</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </nav>
);

export default Navbar;
