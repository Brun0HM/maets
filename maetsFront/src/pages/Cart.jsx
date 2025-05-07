import React from "react";
import Summary from "../components/Summary";
import cyberpunk from "../assets/Banner.png";
import ItemsCart from "../components/ItemsCart";
import PurchaseSummary from "../components/PurchaseSummary";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "../assets/Logo.png";
import profile from "../assets/profile.png";

const Cart = () => {
  return (
    <div>
      <Header Logo={logo} Profile={profile} />
      <div className="container min-vh-100 text-white py-5 px-md-5">
        <div className="row justify-content-between">
          {/* List of games */}
          <div className="col-12 col-lg-7 mb-4">
            <h3 className="mb-4 fs-2 fw-bold">Your shopping cart</h3>
            <div className="d-flex flex-column gap-3">
              <ItemsCart
                Banner={cyberpunk}
                title="Cyberpunk 2077"
                genre="RPG"
                price={79.95}
              />
              <ItemsCart
                Banner={cyberpunk}
                title="Hogwarts Legacy"
                genre="RPG"
                price={98.95}
              />
              <ItemsCart
                Banner={cyberpunk}
                title="Elden Ring"
                genre="Action"
                price={69.95}
              />
            </div>
            <div className="text-end">
              <button className="btn btn-link text-decoration-none text-white opacity-75">
                Remove all
              </button>
            </div>
          </div>

      {/* Summary */}
      <div className="col-12 col-lg-4 d-flex flex-column justify-content-start py-1">
        <h1 className="fw-bold fs-2 text-center">Order Summary</h1>
        <div className="d-flex align-items-center justify-content-center">
          <Summary game={"Cyberpunk 2077"} price={79.89} />
        </div>
      </div>
        </div>
      </div>
      <Footer Logo={logo}/>
    </div>
  );
};

export default Cart;
      <Footer Logo={logo} />
