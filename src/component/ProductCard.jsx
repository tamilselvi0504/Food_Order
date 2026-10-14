// ProductCard.jsx
import React from "react";
import "./ProductCard.css"; // optional for styling

const ProductCard = ({ product,onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
        <button className="add-to-cart" onClick={()=> onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
