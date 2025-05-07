import React, { useEffect, useState } from "react";
import ItemsCart from "../components/ItensCart";
import PurchaseSummary from "../components/PurchaseSummary";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router";
import logo from "../assets/Logo.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Retrieve cart items from LocalStorage when the page loads
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleCheckout = () => {
    // Check if the cart is empty
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before proceeding.");
      return;
    }

    // Redirect to the Payment page
    navigate("/payment");
  };

  const handleRemoveItem = (indexToRemove) => {
    // Remove the item from the state
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);

    // Update LocalStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update the state
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Header Logo={logo} />
      <div className="container min-vh-100 text-white py-5 px-md-5">
        <div className="row justify-content-between">
          {/* List of games */}
          <div className="col-12 col-lg-8 mb-4">
            <h3 className="mb-4 fs-2 fw-bold">Your Cart</h3>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="d-flex flex-column gap-3">
                {cartItems.map((item, index) => (
                  <ItemsCart
                    key={index}
                    name={item.title}
                    price={item.preco}
                    banner={item.banner}
                    genre={item.genero}
                    onRemove={() => handleRemoveItem(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Purchase Summary */}
          <div className="col-12 col-lg-4">
            <PurchaseSummary
              cartItems={cartItems}
              btn={"Finalize Purchase"}
              handleCheckout={handleCheckout} // Pass the checkout handler
            />
          </div>
        </div>
      </div>
      <Footer Logo={logo} />
    </div>
  );
};

export default Cart;