// pages/Payment.jsx
import React from 'react';
import RegisteredCards from '../components/RegisteredCards';
import RegisterCard from '../components/RegisterCard';
import PurchaseSummary from '../components/PurchaseSummary';

export default function Payment() {
  return (
    <div className="container my-5">
      <div className="row gx-4 gy-4 justify-content-center">
        <RegisteredCards />
        <RegisterCard />
        <PurchaseSummary />
      </div>
    </div>
  );
}