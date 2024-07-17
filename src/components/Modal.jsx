import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

const Modal = ({ product, closeModal, cart, setCart }) => {
  const navigate = useNavigate();
  const [localCart, setLocalCart] = useState(cart);

  const totalAmount = localCart.reduce(
    (total, item) =>
      total + item.quantity * parseInt(item.price.replace(/\D/g, "")),
    0
  );

  const handleCheckout = () => {
    setCart(localCart);
    navigate("/checkout", { state: { cart: localCart } });
  };

  const updateQuantity = (product, amount) => {
    setLocalCart(
      localCart
        .map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <p className="modal-title">
            Bạn đã thêm [{product.name}] vào giỏ hàng
          </p>
          <button className="close-modal" onClick={closeModal}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>Giỏ hàng của bạn hiện có {localCart.length} sản phẩm</p>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Thông tin sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {localCart.map((item, index) => (
                <tr key={index}>
                  <td className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                    />
                    <div className="cart-item-info">
                      <p>{item.name}</p>
                      <p
                        className="remove-item"
                        onClick={() => updateQuantity(item, -item.quantity)}
                      >
                        Xóa
                      </p>
                    </div>
                  </td>
                  <td>
                    <p className="product-price">{item.price}</p>
                  </td>
                  <td>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item, -1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item, 1)}>+</button>
                    </div>
                  </td>
                  <td>
                    <p className="product-price">
                      {(
                        item.quantity * parseInt(item.price.replace(/\D/g, ""))
                      ).toLocaleString("vi-VN")}
                      đ
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <div className="total-amount">
            <p>Tổng tiền: {totalAmount.toLocaleString("vi-VN")}đ</p>
          </div>
          <button className="continue-shopping-button" onClick={closeModal}>
            Tiếp tục mua hàng
          </button>
          <button className="place-order-button" onClick={handleCheckout}>
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
