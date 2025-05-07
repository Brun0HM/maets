// pages/Payment.jsx
import React from "react";
import RegisteredCards from "../components/RegisteredCards";
import RegisterCard from "../components/RegisterCard";
import PurchaseSummary from "../components/PurchaseSummary";

export default function Payment() {
  return (
    <div className="container my-5">
      <div className="gy-4 justify-content-center">
        <div className="row">
          <div className="col-12 col-md-3 mt-3">
            <RegisteredCards />
          </div>
          <div className="col-12 col-md-5 mt-3">
            <RegisterCard />
          </div>
          <div className="col-12 col-md-4 mt-3">
            <PurchaseSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
