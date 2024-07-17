import React from "react";

function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
        {product.hasAddToCart && (
          <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
            Thêm vào giỏ hàng
          </button>
        )}
      </div>
      <div className="product-details">
        <p className="product-name">{product.name}</p>
        <p className="product-price">
          {product.price}{" "}
          {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
