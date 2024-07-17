import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './products'; // Giả sử bạn có danh sách sản phẩm ở đây
import './ProductDetail.css'; // Thêm CSS cho trang chi tiết sản phẩm

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  return (
    <div className="product-detail">
      <nav className="breadcrumb">
        <a href="/">Trang chủ</a> &gt; <a href="/all-products">Quần áo</a> &gt; {product.name}
      </nav>
      <div className="product-detail-container">
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image"/>
          <div className="thumbnail-images">
            {product.images && product.images.map((img, index) => (
              <img key={index} src={img} alt={`Thumbnail ${index}`} />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">
            {product.price}
            {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
          </p>
          <p className="product-promo">Miễn phí vận chuyển cho đơn hàng từ 499.000đ</p>
          <p className="product-promo">Miễn phí đổi, sửa hàng trong 30 ngày</p>
          <div className="quantity-selector">
            <label>Số lượng:</label>
            <input type="number" min="1" defaultValue="1" />
          </div>
          <div className="product-actions">
            <button className="buy-now">Mua ngay</button>
            <button className="add-to-cart">Thêm vào giỏ hàng</button>
          </div>
          <div className="product-details">
            <h3>Thông tin chi tiết sản phẩm</h3>
            <p>{product.details}</p>
            <h3>Chất liệu</h3>
            <p>{product.material}</p>
          </div>
        </div>
      </div>
      <div className="related-products">
        <h2>Sản phẩm cùng loại</h2>
        <div className="related-products-grid">
          {products.filter(p => p.category === product.category && p.id !== product.id).map((relatedProduct, index) => (
            <div key={index} className="related-product-card">
              <img src={relatedProduct.image} alt={relatedProduct.name} />
              <p>{relatedProduct.name}</p>
              <p>{relatedProduct.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
