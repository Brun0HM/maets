import React, { useState, useEffect } from 'react';

export default function RegisteredCard({
  // se quiser controlar de fora, passe cards e onCardsChange; senão ele usa internamente
  cards: controlledCards = null,
  onCardsChange = null,
  onCardSelect = null,
  onCardDelete = null,
}) {
  // se chegou props.cards, use ele; caso contrário, use state interno
  const [internalCards, setInternalCards] = useState([]);
  const cards = controlledCards ?? internalCards;

  const [selectedIndex, setSelectedIndex] = useState(null);

  const maskCardNumber = (num) => '**** **** **** ' + num.slice(-4);

  const changeCards = (newCards) => {
    if (onCardsChange) return onCardsChange(newCards);
    setInternalCards(newCards);
  };

  const handleSelect = (i) => {
    setSelectedIndex(i);
    onCardSelect && onCardSelect(i, cards[i]);
  };

  const handleDelete = (i) => {
    const novo = cards.filter((_, idx) => idx !== i);
    changeCards(novo);
    if (selectedIndex === i) setSelectedIndex(null);
    onCardDelete && onCardDelete(i);
  };

  return (
    <div className="conteudo border-0 rounded-4 p-4">
      <h5 className="text-center mb-3">Registered Cards</h5>

      {cards.length === 0
        ? <p className="text-center">No cards saved.</p>
        : cards.map((card, i) => (
          <div
            key={i}
            onClick={() => handleSelect(i)}
            className={
              'p-3 mb-3 rounded-3 d-flex justify-content-between align-items-center text-light ' +
              (i === selectedIndex ? 'border border-success' : '')
            }
            style={{ cursor: 'pointer' }}
          >
            <div>
              <p className="mb-1 fw-bold">{card.fullName}</p>
              <p className="mb-0">{maskCardNumber(card.cardNumber)}</p>
            </div>
            <button
              className="btn btn-sm btn-danger"
              onClick={(e) => { e.stopPropagation(); handleDelete(i); }}
            >
              <i className="bi bi-trash3-fill"></i>
            </button>
          </div>
        ))
      }
    </div>
  );
}
