import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    setShowLogin(false); // Hide login form after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleShowCartModal = () => {
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const handleRegisterSuccess = () => {
    setShowRegister(false);
    setSuccessMessage("Đăng ký thành công!");
    setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <Router>
      <div className="app">
        <Navbar
          isLoggedIn={isLoggedIn}
          username={username}
          onLogout={handleLogout}
          onShowLogin={handleShowLogin}
          onShowRegister={handleShowRegister}
          cartItems={cartItems}
          onShowCartModal={handleShowCartModal}
        />
        {showLogin && <Login onLogin={handleLogin} />}
        {showRegister && <Register onRegisterSuccess={handleRegisterSuccess} />}
        {showCartModal && (
          <Modal
            cart={cartItems}
            setCart={setCartItems}
            closeModal={handleCloseCartModal}
          />
        )}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts onAddToCart={handleAddToCart} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:productId" element={<ProductDetail onAddToCart={handleAddToCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
