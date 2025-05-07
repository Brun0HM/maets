import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function PurchaseSummary(props) {
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState(""); // Estado para armazenar mensagens de erro
  const { cartItems, redirectTo, handleCheckout } = props; // Recebe os itens do carrinho, a rota de redirecionamento e a função de checkout
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const navigate = useNavigate();

  const handleLocalCheckout = () => {
    // Verifica se o carrinho está vazio
    if (!cartItems || cartItems.length === 0) {
      setError("Your cart is empty. Please add items before proceeding.");
      return; // Impede a navegação
    }

    // Chama a função de validação do componente pai, se fornecida
    if (handleCheckout) {
      const isCheckoutValid = handleCheckout(); // Verifica se a validação no pai foi bem-sucedida
      if (isCheckoutValid) {
        navigate(redirectTo); // Redireciona para a página especificada
      }
    } else {
      // Se não houver handleCheckout, redireciona diretamente
      navigate(redirectTo);
    }
  };

  return (
    <div className="conteudo text-light border-0 rounded-4 p-4">
      <h5 className="fw-bold mb-3">Purchase Summary</h5>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, idx) => (
          <div key={idx} className="d-flex justify-content-between mb-2">
            <span>{item.name}</span>
            <span>$ {item.price.toFixed(2)}</span>
          </div>
        ))
      ) : (
        <p className="text-danger">No items in the cart.</p>
      )}
      <hr className="border-light" />
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
      {error && <small className="text-danger d-block mb-3">{error}</small>}
      <button
        className="btn btnCor text-light w-100"
        onClick={handleLocalCheckout} // Chama a função local que valida o carrinho e o cartão
      >
        {props.btn}
      </button>
    </div>
  );
}
