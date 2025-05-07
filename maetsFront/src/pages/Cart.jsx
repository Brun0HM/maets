import React, { useEffect, useState } from "react";
import ItemsCart from "../components/ItensCart";
import PurchaseSummary from "../components/PurchaseSummary";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "../assets/Logo.png";
import profile from "../assets/profile.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Recupera os itens do carrinho do LocalStorage ao carregar a página
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);
  const handleRemoveItem = (indexToRemove) => {
    // Remove o item do estado
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);

    // Atualiza o LocalStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Atualiza o estado
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Header Logo={logo} Profile={profile} />
      <div className="container min-vh-100 text-white py-5 px-md-5">
        <div className="row justify-content-between">
          {/* Lista de jogos */}
          <div className="col-12 col-lg-8 mb-4">
            <h3 className="mb-4 fs-2 fw-bold">Your shopping cart</h3>
            {cartItems.length === 0 ? (
              <p>O carrinho está vazio.</p>
            ) : (
              <div className="d-flex flex-column gap-3">
                {cartItems.map((item, index) => (
                  <ItemsCart
                    key={index}
                    name={item.title}
                    price={item.preco}
                    banner={item.banner}
                    genre={item.genre}
                    onRemove={() => handleRemoveItem(index)} 
                  />
                ))}
              </div>
            )}
          </div>

          {/* Resumo da compra */}
          <div className="col-12 col-lg-4"></div>
        </div>
      </div>
      <Footer Logo={logo} />
    </div>
  );
};

export default Cart;
