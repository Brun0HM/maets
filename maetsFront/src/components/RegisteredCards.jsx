import React from 'react';

const RegisteredCards = ({ savedCards, selectedCardIndex, onSelectCard, onDeleteCard }) => {
  const maskCardNumber = (number) => '**** **** **** ' + number.slice(-4);

  return (
    <div className="col-12 col-md-4">
      <div className="conteudo border-0 rounded-4 p-4">
        <h5 className="text-center mb-3">Registered Cards</h5>
        {savedCards.length === 0 ? (
          <p className="text-center">No cards saved.</p>
        ) : (
          savedCards.map((card, index) => (
            <div
              key={index}
              className={`p-3 mb-3 border rounded conteudo d-flex justify-content-between align-items-center text-light border-0 ${
                selectedCardIndex === index ? 'border border-success' : ''
              }`}
              style={{ cursor: 'pointer' }}
            >
              <div onClick={() => onSelectCard(index)} className="flex-grow-1">
                <p className="mb-1 fw-bold">{card.fullName}</p>
                <p className="mb-0">{maskCardNumber(card.cardNumber)}</p>
              </div>
              <button
                className="btn btn-sm btn-danger ms-3"
                onClick={() => onDeleteCard(index)}
              >
                <i className="bi bi-trash3-fill"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RegisteredCards;
