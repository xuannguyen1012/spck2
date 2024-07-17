import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";

const provinces = [
  { id: "1", name: "Hà Nội" },
  { id: "2", name: "Hồ Chí Minh" },
];

const districts = {
  1: [
    { id: "1", name: "Quận Ba Đình" },
    { id: "2", name: "Quận Hoàn Kiếm" },
  ],
  2: [
    { id: "3", name: "Quận 1" },
    { id: "4", name: "Quận 2" },
  ],
};

const wards = {
  1: [
    { id: "1", name: "Phường Phúc Xá" },
    { id: "2", name: "Phường Trúc Bạch" },
  ],
  3: [
    { id: "3", name: "Phường Tân Định" },
    { id: "4", name: "Phường Đa Kao" },
  ],
};

const Checkout = () => {
  const location = useLocation();
  const { cart: initialCart } = location.state || { cart: [] };
  const [cart, setCart] = useState(initialCart);
  const totalAmount = cart.reduce(
    (total, item) =>
      total + item.quantity * parseInt(item.price.replace(/\D/g, "")),
    0
  );

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  useEffect(() => {
    setSelectedDistrict("");
    setSelectedWard("");
  }, [selectedProvince]);

  useEffect(() => {
    setSelectedWard("");
  }, [selectedDistrict]);

  const updateQuantity = (product, amount) => {
    setCart(
      cart
        .map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="shipping-info">
          <h2>Thông tin nhận hàng</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Họ và tên" required />
            <input type="text" placeholder="Số điện thoại (tùy chọn)" />
            <input type="text" placeholder="Địa chỉ (tùy chọn)" />
            <select
              required
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
            >
              <option value="">Tỉnh thành</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">Quận huyện (tùy chọn)</option>
              {(districts[selectedProvince] || []).map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>
            <select
              value={selectedWard}
              onChange={(e) => setSelectedWard(e.target.value)}
            >
              <option value="">Phường xã (tùy chọn)</option>
              {(wards[selectedDistrict] || []).map((ward) => (
                <option key={ward.id} value={ward.id}>
                  {ward.name}
                </option>
              ))}
            </select>
            <textarea placeholder="Ghi chú (tùy chọn)" />
          </form>
        </div>
        <div className="order-summary">
          <h2>Đơn hàng ({cart.length} sản phẩm)</h2>
          <div className="order-items">
            {cart.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>
                    {item.quantity} x {item.price}
                  </p>
                </div>
                <p>
                  {(
                    item.quantity * parseInt(item.price.replace(/\D/g, ""))
                  ).toLocaleString("vi-VN")}
                  đ
                </p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="total-amount">
            <p>Tạm tính: {totalAmount.toLocaleString("vi-VN")}đ</p>
            <p>Phí vận chuyển: -</p>
            <p>Tổng cộng: {totalAmount.toLocaleString("vi-VN")}đ</p>
          </div>
          <div className="discount-code">
            <input type="text" placeholder="Nhập mã giảm giá" />
            <button>Áp dụng</button>
          </div>
          <button className="place-order-button">ĐẶT HÀNG</button>
          <a href="/">Quay về trang chủ</a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
