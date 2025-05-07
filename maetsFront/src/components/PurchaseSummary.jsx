import React from "react";

export default function PurchaseSummary({ cartItems, handleCheckout, btn, redirectTo  }) {
  // Calcula o total com base nos itens do carrinho
  const total = cartItems.reduce((acc, item) => acc + item.preco, 0);


  return (
    <div className="conteudo text-light border-0 rounded-4 p-4">
      <h5 className="fw-bold mb-3">Resumo da Compra</h5>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, idx) => (
          <div key={idx} className="d-flex justify-content-between mb-2">
            <span>{item.title}</span>
            <span>R$ {item.preco}</span>
          </div>
        ))
      ) : (
        <p className="text-danger">O carrinho está vazio.</p>
      )}
      <hr className="border-light" />
      <div className="d-flex justify-content-between fw-bold mb-3">
        <span>Total:</span>
        <span>R$ {total.toFixed(2)}</span>
      </div>
      <button className="btn btnCor text-light w-100" onClick={handleCheckout}>{btn}</button>
    </div>
  );
}