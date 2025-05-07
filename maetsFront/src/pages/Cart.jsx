import React from "react";
import cyberpunk from "../assets/Banner.png";
import ItemsCart from "../components/ItensCart";
import PurchaseSummary from "../components/PurchaseSummary";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "../assets/Logo.png";
import profile from "../assets/profile.png";

const Cart = () => {
  const cartItems = [
    { name: "Cyberpunk", price: 48.99, genre: "RPG" },
    { name: "Cyberpunk DLC", price: 29.99, genre: "RPG" },
    { name: "Cyberpunk 200 Coins", price: 9.99, genre: "Action" },
  ];

  return (
    <div>
      <Header Logo={logo} />
      <div className="container min-vh-100 text-white py-5 px-md-5">
        <div className="row justify-content-between">
          {/* List of games */}
          <div className="col-12 col-lg-8 mb-4">
            <h3 className="mb-4 fs-2 fw-bold">Your shopping cart</h3>
            <div className="d-flex flex-column gap-3">
              {cartItems.map((item, idx) => (
                <ItemsCart
                  key={idx} // Adiciona uma chave única para cada item
                  Banner={cyberpunk} // Imagem do banner (pode ser ajustada para ser dinâmica)
                  title={item.name} // Nome do item
                  genre={item.genre} // Gênero do item
                  price={item.price} // Preço do item
                />
              ))}
            </div>
            <div className="text-end">
              <button className="btn btn-link text-decoration-none text-white opacity-75">
                Remove all
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="col-12 col-lg-4 pt-5 mt-3">
            <PurchaseSummary
              btn="Next"
              redirectTo="/payment" // Redireciona para a página de pagamento
              cartItems={cartItems}
            />
          </div>
        </div>
      </div>
      <Footer Logo={logo} />
    </div>
  );
};

export default Cart;
