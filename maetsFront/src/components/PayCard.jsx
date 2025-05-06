import { useState } from "react";
import RegisterCard from "./RegisterCard";
import RegisteredCards from "./RegisteredCards";
import PurchaseSummary from "./PurchaseSummary";

const PayCard = () => {
  const [fullName, setFullName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [savedCards, setSavedCards] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [coupon, setCoupon] = useState("");

  const cartItems = [
    { name: "Product A", price: 49.99 },
    { name: "Product B", price: 29.99 },
    { name: "Product C", price: 19.99 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleSaveCard = () => {
    if (selectedCardIndex !== null) {
      alert("This card is already saved!");
      return;
    }

    if (fullName && cardNumber.length === 16 && expiry && cvv.length === 3) {
      const newCard = { fullName, cardNumber, expiry, cvv };
      setSavedCards([...savedCards, newCard]);
      setFullName("");
      setCardNumber("");
      setExpiry("");
      setCvv("");
      setSelectedCardIndex(null);
    } else {
      alert("Fill in all the fields correctly!");
    }
  };

  const handleSelectCard = (index) => {
    const selected = savedCards[index];
    setFullName(selected.fullName);
    setCardNumber(selected.cardNumber);
    setExpiry(selected.expiry);
    setCvv(selected.cvv);
    setSelectedCardIndex(index);
  };

  const handleDeleteCard = (index) => {
    const updatedCards = savedCards.filter((_, i) => i !== index);
    setSavedCards(updatedCards);
    if (selectedCardIndex === index) {
      setSelectedCardIndex(null);
      setFullName("");
      setCardNumber("");
      setExpiry("");
      setCvv("");
    }
  };

  const handlePurchase = () => {
    if (selectedCardIndex === null) {
      alert("Select a card to checkout.");
      return;
    }
    alert("Purchase successfully completed!");
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center g-4">
        <RegisteredCards
          savedCards={savedCards}
          selectedCardIndex={selectedCardIndex}
          onSelectCard={handleSelectCard}
          onDeleteCard={handleDeleteCard}
        />

        <RegisterCard
          fullName={fullName}
          setFullName={setFullName}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          expiry={expiry}
          setExpiry={setExpiry}
          cvv={cvv}
          setCvv={setCvv}
          handleSaveCard={handleSaveCard}
        />

        {/* Purchase Summary */}
        <div className="col-12 col-md-4">
          <div className="conteudo border-0 rounded-4 p-4">
            <h5 className="fw-bold mb-3">Purchase Summary</h5>
            {cartItems.map((item, index) => (
              <div key={index} className="d-flex justify-content-between mb-2">
                <span>{item.name}</span>
                <span>$ {item.price.toFixed(2)}</span>
              </div>
            ))}
            <hr />
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
              className="btnCor border-0 text-light p-2 rounded-3 w-100 fw-bold"
              onClick={handlePurchase}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayCard;
