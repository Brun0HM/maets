// components/RegisterCard.jsx
import React, { useState } from 'react';

export default function RegisterCard() {
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSaveCard = () => {
    console.log('Card saved', { fullName, cardNumber, expiry, cvv });
    setFullName('');
    setCardNumber('');
    setExpiry('');
    setCvv('');
  };

  return (
    <div className="">
      <div className="conteudo text-light border-0 rounded-4 p-4">
        <h2 className="fw-semibold text-center mb-4">Register Card</h2>
        <div className="mb-3">
          <label className="form-label">Card holder full name</label>
          <input
            className="form-control inputCredit border-0 text-light"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Card Number</label>
          <input
            className="form-control inputCredit border-0 text-light"
            type="text"
            placeholder="0000 0000 0000 0000"
            maxLength={16}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Expiry Date / CVV</label>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <input
              className="form-control inputCredit border-0 text-light"
              type="text"
              placeholder="MM/YY"
              maxLength={5}
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
            <input
              className="form-control inputCredit border-0 text-light"
              type="text"
              placeholder="CVV"
              maxLength={3}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>
        <button
          className="btnCor border-0 text-light py-3 px-4 rounded-3 fw-bold w-100"
          onClick={handleSaveCard}
        >
          Save
        </button>
      </div>
    </div>
  );
}
