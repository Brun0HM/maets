import React, { useState, useEffect } from "react";
import RegisteredCards from "../components/RegisteredCards";
import RegisterCard from "../components/RegisterCard";
import PurchaseSummary from "../components/PurchaseSummary";

export default function Payment() {
  const [cards, setCards] = useState([]); // Estado para armazenar os cartões
  const [selectedCard, setSelectedCard] = useState(null); // Estado para o cartão selecionado
  const [error, setError] = useState(""); // Estado para mensagens de erro

  // Carrega os cartões do localStorage ao inicializar
  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(savedCards);
  }, []);

  const handleCheckout = () => {
    // Verifica se há um cartão selecionado
    if (!selectedCard) {
      setError("Please select a valid payment method before proceeding.");
      return false; // Impede a navegação
    }

    // Limpa o erro e continua
    setError("");
    console.log("Checkout successful with card:", selectedCard);
    return true; // Indica que a validação foi bem-sucedida
  };

  const cartItems = [
    { name: "Cyberpunk", price: 48.99 },
    { name: "Cyberpunk DLC", price: 29.99 },
    { name: "Cyberpunk 200 Coins", price: 9.99 },
  ];

  return (
    <div className="container my-5">
      <div className="gy-4 justify-content-center">
        <div className="row">
          {/* Cartões Registrados */}
          <div className="col-12 col-md-3 mt-3">
            <RegisteredCards
              cards={cards}
              setCards={setCards}
              setSelectedCard={setSelectedCard}
            />
          </div>

          {/* Formulário para Registrar Novo Cartão */}
          <div className="col-12 col-md-5 mt-3">
            <RegisterCard
              setHasPaymentMethod={(isValid) => {
                if (isValid) setError(""); // Limpa o erro se o cartão for válido
              }}
              updateCards={setCards} // Atualiza os cartões dinamicamente
            />
          </div>

          {/* Resumo da Compra */}
          <div className="col-12 col-md-4 mt-3">
            <PurchaseSummary
              cartItems={cartItems}
              redirectTo="/profile"
              btn={"Checkout"}
              handleCheckout={handleCheckout} // Passa a função de validação para o botão
            />
            {error && <p className="text-danger mt-3">{error}</p>}{" "}
            {/* Exibe a mensagem de erro */}
          </div>
        </div>
      </div>
    </div>
  );
}
