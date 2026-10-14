// Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import "./Layout.css";
import Footer from "../pages/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};



export default Layout;
