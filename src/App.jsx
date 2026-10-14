// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import ProductList from "./component/ProductList";
import CartPage from "./pages/CartPage";   // ✅ use CartPage instead of Cart directly
import OrderPage from "./pages/OrderPage"; // ✅ order summary page
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Menu from "./pages/Menu";


const sampleProducts = [
  { id: 1, name: "Veg Burger", price: 120, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Cheese Pizza", price: 250, image: "https://via.placeholder.com/150" },
  { id: 3, name: "French Fries", price: 80, image: "https://via.placeholder.com/150" }
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // const handlePlaceOrder = () => {
  //   setOrderItems(cartItems);
  //   setCartItems([]);
  // };

  
// const handleOrderItem = (product) => {
//   setOrderItems([product]);

//   setCartItems((prev) => {
//     const index = prev.findIndex((item) => item.id === product.id);
//     if (index === -1) return prev;

//     return prev.filter((_, i) => i !== index);
//   });
// };


const handleOrderItem = (product) => {
  setOrderItems([{ ...product, quantity: 1 }]);

  setCartItems((prev) => {
    const index = prev.findIndex((item) => item.id === product.id);
    if (index === -1) return prev;
    return prev.filter((_, i) => i !== index);
  });
};



  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route
            path="/menu"
            element={<ProductList products={sampleProducts} onAddToCart={handleAddToCart} />}
          /> */}

          <Route
           path="/menu"
           element={<Menu onAddToCart={handleAddToCart} />}
          />
          
           
<Route
  path="/cart"
  element={
    <CartPage
      cartItems={cartItems}
      onOrderItem={handleOrderItem}
    />
  }
/>



          {/* <Route path="/cart" element={<CartPage cartItems={cartItems} />} /> */}
          <Route path="/order" element={<OrderPage orderItems={orderItems} />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;




// inside <Routes> in App.jsx


