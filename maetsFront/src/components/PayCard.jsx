import React, { useState } from 'react';

const PayCard = () => {
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [savedCards, setSavedCards] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [coupon, setCoupon] = useState('');

  const cartItems = [
    { name: 'Product A', price: 49.99 },
    { name: 'Product B', price: 29.99 },
    { name: 'Product C', price: 19.99 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleSaveCard = () => {
    if (selectedCardIndex !== null) {
      alert('This card is already saved!');
      return;
    }

    if (fullName && cardNumber.length === 16 && expiry && cvv.length === 3) {
      const newCard = { fullName, cardNumber, expiry, cvv };
      setSavedCards([...savedCards, newCard]);
      setFullName('');
      setCardNumber('');
      setExpiry('');
      setCvv('');
      setSelectedCardIndex(null);
    } else {
      alert('Fill in all the fields correctly!');
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
      setFullName('');
      setCardNumber('');
      setExpiry('');
      setCvv('');
    }
  };

  const maskCardNumber = (number) => '**** **** **** ' + number.slice(-4);

  const handlePurchase = () => {
    if (selectedCardIndex === null) {
      alert('Select a card to checkout.');
      return;
    }
    alert('Purchase successfully completed!');
  };

  return (
    <div className='container mt-5 mb-5'>
      <div className='row justify-content-center g-4'>

        {/* Cartões Salvos */}
        <div className='col-12 col-md-4'>
          <div className='conteudo border-0 rounded-4 p-4'>
            <h5 className='text-center mb-3'>Registered Cards</h5>
            {savedCards.length === 0 ? (
              <p className='text-center'>No cards saved.</p>
            ) : (
              savedCards.map((card, index) => (
                <div
                  key={index}
                  className={`p-3 mb-3 border rounded conteudo d-flex justify-content-between align-items-center text-light border-0 ${
                    selectedCardIndex === index ? 'border border-success' : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  <div onClick={() => handleSelectCard(index)} className='flex-grow-1'>
                    <p className='mb-1 fw-bold'>{card.fullName}</p>
                    <p className='mb-0'>{maskCardNumber(card.cardNumber)}</p>
                  </div>
                  <button
                    className='btn btn-sm btn-danger ms-3'
                    onClick={() => handleDeleteCard(index)}
                  >
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Cadastro de Cartão */}
        <div className='col-12 col-md-4'>
          <div className='conteudo border-0 rounded-4 p-4 text-white'>
            <h2 className='fw-semibold text-center mb-4'>Register Card</h2>

            <div className='mb-3'>
              <label>Card holder full name</label>
              <input
                className='form-control inputCredit border-0 text-light'
                type='text'
                placeholder='Enter your full name'
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setSelectedCardIndex(null);
                }}
              />
            </div>

            <div className='mb-3'>
              <label>Card Number</label>
              <input
                className='form-control inputCredit border-0 text-light'
                type='text'
                placeholder='0000 0000 0000 0000'
                maxLength={16}
                value={cardNumber}
                onChange={(e) => {
                  setCardNumber(e.target.value);
                  setSelectedCardIndex(null);
                }}
              />
            </div>

            <div className='mb-3'>
              <label>Expiry Date / CVV</label>
              <div className='d-flex flex-column flex-sm-row gap-3'>
                <input
                  className='form-control inputCredit border-0 text-light'
                  type='text'
                  placeholder='MM/YY'
                  maxLength={5}
                  value={expiry}
                  onChange={(e) => {
                    setExpiry(e.target.value);
                    setSelectedCardIndex(null);
                  }}
                />
                <input
                  className='form-control inputCredit border-0 text-light'
                  type='text'
                  placeholder='CVV'
                  maxLength={3}
                  value={cvv}
                  onChange={(e) => {
                    setCvv(e.target.value);
                    setSelectedCardIndex(null);
                  }}
                />
              </div>
            </div>

            <button
              className='border-0 py-3 px-4 btnCor rounded-3 text-light fw-bold w-100 mt-3'
              onClick={handleSaveCard}
            >
              Save
            </button>
          </div>
        </div>

        {/* Resumo e Finalizar */}
        <div className='col-12 col-md-4'>
          <div className='conteudo border-0 rounded-4 p-4'>
            <h5 className='fw-bold mb-3'>Purchase Summary</h5>

            {cartItems.map((item, index) => (
              <div key={index} className='d-flex justify-content-between mb-2'>
                <span>{item.name}</span>
                <span>R$ {item.price.toFixed(2)}</span>
              </div>
            ))}

            <hr />
            <div className='d-flex justify-content-between fw-bold mb-3'>
              <span>Total:</span>
              <span>$ {total.toFixed(2)}</span>
            </div>

            <input
              className='form-control mb-3 inputCredit border-0 text-light'
              type='text'
              placeholder='Discount Coupon'
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />

            <button
              className='btnCor border-0 text-light p-2 rounded-3 w-100 fw-bold'
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
