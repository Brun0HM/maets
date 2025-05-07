// **components/PurchaseSummary.jsx**
import React, { useState } from 'react';

// Receives `cartItems` as props:
const PurchaseSummary = ({ cartItems = [] }) => {
  const [coupon, setCoupon] = useState('');
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    console.log('Checkout started', { cartItems, coupon });
  };

  return (
    <div className="col-12 col-md-4">
      <div className="content border-0 rounded-4 p-4">
        <h5 className="fw-bold mb-3">Purchase Summary</h5>

        {cartItems.map((item, idx) => (
          <div key={idx} className="d-flex justify-content-between mb-2">
            <span>{item.name}</span>
            <span>R$ {item.price.toFixed(2)}</span>
          </div>
        ))}

        <hr />
        </div>
        <div className="d-flex justify-content-between fw-bold mb-3">

        <div className="d-flex justify-content-between fw-bold mb-3">
          <span>Total:</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>

        <input
          className="form-control mb-3 inputCredit border-0 text-light"
          type="text"
          placeholder="Discount Coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />

        <button
          className="btnCor border-0 text-light p-2 rounded-3 w-100 fw-bold"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default PurchaseSummary;


