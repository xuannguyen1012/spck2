import React, { useState } from "react";
import { products } from "./products"; 
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import Footer from "./Footer"; 
import "./AllProducts.css";

function AllProducts() {
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setAddedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="all-products">
      <header className="all-products-header">
        <h1>Tất cả sản phẩm</h1>
      </header>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      {modalVisible && (
        <Modal
          product={addedProduct}
          closeModal={closeModal}
          cart={cart}
          setCart={setCart}
        />
      )}
    </div>
  );
}

export default AllProducts;
