import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>NHẬP THÔNG TIN KHUYẾN MÃI TỪ CHÚNG TÔI</h2>
        <div className="newsletter-input">
          <input type="email" placeholder="Nhập email của bạn" />
          <button>Gửi</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section about">
          <img src="logo_footer.webp" alt="" />
          <p>Shop Thời trang và phụ kiện Alena</p>
          <div className="contact">
            <p>
              <i className="fas fa-map-marker-alt"></i> Tầng 6, Tòa nhà Ladeco,
              266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, TP Hà Nội
            </p>
            <p>
              <i className="fas fa-clock"></i> Giờ làm việc: Từ 9:00 đến 22:00
              các ngày trong tuần từ Thứ 2 đến Chủ nhật
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> Hotline: 1900 6750
            </p>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Về chúng tôi</h2>
          <ul>
            <li>Trang chủ</li>
            <li>Thời trang Nam</li>
            <li>Sản phẩm</li>
            <li>Bé trai</li>
            <li>Bé gái</li>
            <li>Tin tức</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div className="footer-section links">
          <h2>Hỗ trợ khách hàng</h2>
          <ul>
            <li>Trang chủ</li>
            <li>Thời trang Nam</li>
            <li>Sản phẩm</li>
            <li>Bé trai</li>
            <li>Bé gái</li>
            <li>Tin tức</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div className="footer-section links">
          <h2>Dịch vụ</h2>
          <ul>
            <li>Trang chủ</li>
            <li>Thời trang Nam</li>
            <li>Sản phẩm</li>
            <li>Bé trai</li>
            <li>Bé gái</li>
            <li>Tin tức</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div className="footer-section social">
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
