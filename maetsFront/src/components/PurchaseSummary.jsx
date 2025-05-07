// components/PurchaseSummary.jsx
import React, { useState } from "react";

export default function PurchaseSummary(props) {
  const [coupon, setCoupon] = useState("");
  const { cartItems } = props; // Recebe os itens do carrinho via props
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    console.log("Checkout iniciado", { cartItems, coupon });
  };

  return (
    <div className="">
      <div className="conteudo text-light border-0 rounded-4 p-4">
        <h5 className="fw-bold mb-3">Purchase Summary</h5>
        {cartItems.map((item, idx) => (
          <div key={idx} className="d-flex justify-content-between mb-2">
            <span>{item.name}</span>
            <span>$ {item.price.toFixed(2)}</span>
          </div>
        ))}
        <hr className="border-light" />
        <div className="d-flex justify-content-between fw-bold mb-3">
          <span>Total:</span>
          <span>$ {total.toFixed(2)}</span>
        </div>
        <input
          className="form-control mb-3 inputCredit border-0 text-light"
          type="text"
          placeholder="Discount Coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button
          className="btn btnCor text-light w-100"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
