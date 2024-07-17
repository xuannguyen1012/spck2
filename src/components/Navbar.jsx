import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({ isLoggedIn, username, onLogout, onShowLogin, onShowRegister }) => {
  return (
    <div className="container">
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src="logo.png" alt="Alena Logo" />
          </div>
          <div className="search-bar">
            <select>
              <option value="all">Tất cả</option>
              <option value="all">Giầy dép</option>
              <option value="all">Phụ Kiện</option>
              <option value="all">Sơ mi dài tay</option>
              <option value="all">Sơ mi ngắn tay</option>
              <option value="all">Sản phẩm khuyến mãi</option>
              <option value="all">Sản phẩm hot trend</option>
              <option value="all">Sản phẩm nổi bật</option>
              <option value="all">Quần short nam</option>
              <option value="all">Quần âu nam</option>
              <option value="all">Sơ mi nam</option>
              <option value="all">Bé gái</option>
              <option value="all">Bé trai</option>
              <option value="all">Thời trang nữ</option>
              <option value="all">Thời trang nam</option>
            </select>
            <input type="text" placeholder="Tìm sản phẩm bạn mong muốn" />
            <button type="button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="user-actions">
            {isLoggedIn ? (
              <div className="user-info">
                <div className="username-circle">
                  {username ? username[0] : 'U'}
                </div>
                <div className="logout-button" onClick={onLogout}>
                  Log Out
                </div>
              </div>
            ) : (
              <div className="auth-buttons">
                <button className="login-button" onClick={onShowLogin}>Log In</button>
                <button className="register-button" onClick={onShowRegister}>Register</button>
              </div>
            )}
            <div className="cart">
            </div>
          </div>
        </div>
      </header>
      <nav className="menu">
        <ul>
          <li><a href="/">Trang chủ</a></li>
          <li className="dropdown">
            <a href="#">Thời trang Nam ▼</a>
            <div className="dropdown-content">
              <div className="dropdown-content-item">
                <a href="#">Sơ mi nam ►</a>
                <div className="nested-dropdown">
                  <a href="#">Sơ mi ngắn tay</a>
                  <a href="#">Sơ mi dài tay</a>
                </div>
              </div>
              <a href="#">Quần âu nam</a>
              <a href="#">Quần short nam</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Sản phẩm ▼</a>
            <div className="dropdown-content">
              <div className="dropdown-content-item">
                <a href="#">Sản phẩm nổi bật ►</a>
                <div className="nested-dropdown">
                  <a href="#">Quần áo</a>
                  <a href="#">Phụ kiện</a>
                  <a href="#">Giày dép</a>
                  <a href="#">Bé gái</a>
                  <a href="#">Bé trai</a>
                </div>
              </div>
              <a href="#">Sản phẩm hot trend</a>
              <a href="#">Sản phẩm khuyến mãi</a>
            </div>
          </li>
          <li><a href="/">Bé trai</a></li>
          <li><a href="/">Bé gái</a></li>
          <li><a href="/">Tin tức</a></li>
          <li><a href="/">Liên hệ</a></li>
        </ul>
        <div className="hotline">
          <i className="phone-icon"></i>
          <span>📞 Hotline: 1900 6750</span>
        </div>
      </nav>
      <div className="htl1">
        <img src="slider_1.webp" alt="Slider" className="responsive-image" />
      </div>
      <div className="features">
        <div className="feature">
          <h3>MIỄN PHÍ GIAO HÀNG</h3>
          <p>Miễn phí ship với đơn hàng lớn hơn 498K</p>
        </div>
        <div className="feature">
          <h3>THANH TOÁN COD</h3>
          <p>Thanh toán khi nhận hàng (COD)</p>
        </div>
        <div className="feature">
          <h3>KHÁCH HÀNG VIP</h3>
          <p>Ưu đãi dành cho khách hàng VIP</p>
        </div>
        <div className="feature">
          <h3>HỖ TRỢ BẢO HÀNH</h3>
          <p>Đổi, sửa đồ tại tất cả store</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
