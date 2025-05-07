// components/RegisteredCards.jsx
import React, { useState } from "react";

export default function RegisteredCards() {
  const [cards, setCards] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const maskCardNumber = (num) => "**** **** **** " + num.slice(-4);

  const handleSelect = (i) => setSelectedIndex(i);
  const handleDelete = (i) => {
    setCards(cards.filter((_, idx) => idx !== i));
    if (selectedIndex === i) setSelectedIndex(null);
  };
  return (
    <div className="">
      <div className="conteudo text-light border-0 rounded-4 pt-4 pb-4">
        <h5 className="text-center mb-3">Registered Cards</h5>
        {cards.length === 0 ? (
          <p className="text-center">No cards saved.</p>
        ) : (
          cards.map((card, i) => (
            <div
              key={i}
              onClick={() => handleSelect(i)}
              className={`p-3 mb-3 rounded-3 d-flex justify-content-between align-items-center ${
                i === selectedIndex ? "border border-success" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div>
                <p className="mb-1 fw-bold">{card.fullName}</p>
                <p className="mb-0">{maskCardNumber(card.cardNumber)}</p>
              </div>
              <button
                className="btn btn-sm btn-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(i);
                }}
              >
                <i className="bi bi-trash3-fill"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
