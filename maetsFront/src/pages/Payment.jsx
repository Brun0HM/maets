import React, { useState, useEffect } from "react";
import RegisteredCards from "../components/RegisteredCards";
import RegisterCard from "../components/RegisterCard";
import PurchaseSummary from "../components/PurchaseSummary";
import { useNavigate } from "react-router";

const Payment = () => {
  const [cards, setCards] = useState([]); // State to store registered cards
  const [selectedCard, setSelectedCard] = useState(null);
  const [error, setError] = useState("");
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Retrieve cart items from LocalStorage when the page loads
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    // Retrieve registered cards from LocalStorage
    const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(storedCards);
  }, []);

  const handleAddCard = (newCard) => {
    // Add the new card to the state
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);

    // Save the updated cards to LocalStorage
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  const handleCheckout = () => {
    // Check if a payment method is selected
    if (!selectedCard) {
      setError("Please select a payment method before proceeding.");
    }

    // Clear the error and proceed
    setError("");
    console.log("Checkout successful with card:", selectedCard);

    // Clear the cart from LocalStorage
    localStorage.removeItem("cart");

    // Redirect to the profile page
    navigate("/profile");
  };

  return (
    <div className="container my-5">
      <div className="gy-4 justify-content-center">
        <div className="row">
          {/* Registered Cards */}
          <div className="col-12 col-md-3 mt-3">
            <RegisteredCards
              cards={cards}
              setCards={setCards}
              setSelectedCard={setSelectedCard}
            />
          </div>

          {/* Register Card */}
          <div className="col-12 col-md-5 mt-3">
            <RegisterCard
              setHasPaymentMethod={(isValid) => {
                if (isValid) setError(""); // Clear the error if the card is valid
              }}
              updateCards={setCards} // Dynamically update the cards
            />
          </div>

          {/* Purchase Summary */}
          <div className="col-12 col-md-4 mt-3">
            <PurchaseSummary
              cartItems={cartItems}
              redirectTo="/profile"
              btn={"Checkout"}
              handleCheckout={handleCheckout} // Pass the validation function to the button
            />
            {error && <p className="text-danger mt-3">{error}</p>}{" "}
            {/* Display the error message */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
