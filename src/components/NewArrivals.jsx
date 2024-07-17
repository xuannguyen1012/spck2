import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import { products } from "./products";
import "./NewArrivals.css";

const NewArrivals = () => {
  const [selectedCategory, setSelectedCategory] = useState("quan-ao");
  const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.categories.includes(selectedCategory)
    );
    setNewArrivalsProducts(filteredProducts);
  }, [selectedCategory]);

  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

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
    <div className="new-arrivals-section">
      <h2>HÀNG MỚI VỀ</h2>
      <div className="main-content-new-arrivals">
        <div className="banner">
          <img src="banner_new.webp" alt="Banner" />
        </div>
        <div className="products-section-new-arrivals">
          <div className="nav">
            <span onClick={() => filterProducts("quan-ao")}>&larr;</span>
            <button onClick={() => filterProducts("quan-ao")}>Quần áo</button>
            <button onClick={() => filterProducts("Phụ kiện")}>Phụ kiện</button>
            <button onClick={() => filterProducts("Giày dép")}>Giầy dép</button>
            <button onClick={() => filterProducts("Bé gái")}>Bé gái</button>
            <button onClick={() => filterProducts("Bé trai")}>Bé trai</button>
            <span onClick={() => filterProducts("Bé trai")}>&rarr;</span>
          </div>
          <div className="products-grid-new-arrivals">
            {newArrivalsProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="view-all-container">
        <button className="view-all" onClick={() => navigate("/all-products")}>
          Xem tất cả
        </button>
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
};

export default NewArrivals;
