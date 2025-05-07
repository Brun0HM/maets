import React from "react";
import cyberpunk from "../assets/Banner.png";
import ItemsCart from "../components/ItensCart";
import PurchaseSummary from "../components/PurchaseSummary";
import Sumary from "../components/Sumary";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "../assets/Logo.png";
import profile from "../assets/profile.png";

const Cart = () => {
  const cartItems = [
    { name: "Cyberpunk", price: 48.99 },
    { name: "Cyberpunk dlc", price: 29.99 },
    { name: "Cyberpunk 200 coins", price: 9.99 },
  ];
  return (
    <div>
      <Header Logo={logo} Profile={profile} />
      <div className="container min-vh-100 text-white py-5 px-md-5">
        <div className="row justify-content-between">
          {/* List of games */}
          <div className="col-12 col-lg-8 mb-4">
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
          <div className="col-12 col-lg-4 pt-5 mt-3">
            <PurchaseSummary cartItems={cartItems} />
          </div>
        </div>
      </div>
      <Footer Logo={logo} />
    </div>
  );
};

export default Cart;
<Footer Logo={logo} />;
