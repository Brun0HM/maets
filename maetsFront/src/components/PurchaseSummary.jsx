import React from 'react';

const PurchaseSummary = ({ cartItems, total, coupon, setCoupon, handlePurchase }) => {
  return (
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
  );
};

export default PurchaseSummary;
