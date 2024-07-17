import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import NewArrivals from "./NewArrivals";
import { products } from "./products";
import "./Home.css";

function Home() {
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [selectedCategoryHot, setSelectedCategoryHot] = useState("quan-ao");
  const [selectedCategoryNewArrivals, setSelectedCategoryNewArrivals] =
    useState("quan-ao");
  const [hotProducts, setHotProducts] = useState([]);
  const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);
  const navigate = useNavigate();
  const gridRef = useRef(null);

  useEffect(() => {
    const filteredHotProducts = products.filter((product) =>
      product.categories.includes(selectedCategoryHot)
    );
    setHotProducts(filteredHotProducts);

    const filteredNewArrivalsProducts = products.filter((product) =>
      product.categories.includes(selectedCategoryNewArrivals)
    );
    setNewArrivalsProducts(filteredNewArrivalsProducts);
  }, [selectedCategoryHot, selectedCategoryNewArrivals]);

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

  const filterProducts = (category, setCategory) => {
    setCategory(category);
  };

  const handleMouseDown = (e) => {
    const startX = e.pageX - gridRef.current.offsetLeft;
    const scrollLeft = gridRef.current.scrollLeft;

    const onMouseMove = (e) => {
      const x = e.pageX - gridRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Tốc độ cuộn
      gridRef.current.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <>
      <div className="header">
        <h1>SẢN PHẨM HOT</h1>
        <div className="nav">
          <span
            onClick={() => filterProducts("quan-ao", setSelectedCategoryHot)}
          >
            &larr;
          </span>
          <button
            onClick={() => filterProducts("quan-ao", setSelectedCategoryHot)}
          >
            Quần áo
          </button>
          <button
            onClick={() => filterProducts("Phụ kiện", setSelectedCategoryHot)}
          >
            Phụ kiện
          </button>
          <button
            onClick={() => filterProducts("Giày dép", setSelectedCategoryHot)}
          >
            Giầy dép
          </button>
          <button
            onClick={() => filterProducts("Bé gái", setSelectedCategoryHot)}
          >
            Bé gái
          </button>
          <button
            onClick={() => filterProducts("Bé trai", setSelectedCategoryHot)}
          >
            Bé trai
          </button>
          <span
            onClick={() => filterProducts("Bé trai", setSelectedCategoryHot)}
          >
            &rarr;
          </span>
        </div>
      </div>
      <div
        className="products-grid-container"
        ref={gridRef}
        onMouseDown={handleMouseDown}
      >
        <div className="products-grid">
          {hotProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              handleAddToCart={handleAddToCart}
              className="product-card"
            />
          ))}
        </div>
      </div>
      <div className="view-all-container">
        <button className="view-all" onClick={() => navigate("/all-products")}>
          Xem tất cả
        </button>
      </div>
      <NewArrivals products={newArrivalsProducts} />
      {modalVisible && (
        <Modal
          product={addedProduct}
          closeModal={closeModal}
          cart={cart}
          setCart={setCart}
        />
      )}
    </>
  );
}

export default Home;
