// // ProductList.jsx
// import React from "react";
// import ProductCard from "./ProductCard";

// const ProductList = ({ products }) => {
//   return (
//     <div className="product-list">
//       {products.map((item) => (
//         <ProductCard key={item.id} product={item} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;

// component/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
      ))}


      <button onClick={() => onAddToCart(product)}>
  Add to Cart
</button>
    </div>
  );
};

export default ProductList;
