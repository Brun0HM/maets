import React from 'react';

const RegisterCard = ({
  fullName,
  setFullName,
  cardNumber,
  setCardNumber,
  expiry,
  setExpiry,
  cvv,
  setCvv,
  handleSaveCard,
  setSelectedCardIndex
}) => {
  return (
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
  );
};

export default RegisterCard;
