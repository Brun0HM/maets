import React from "react";
import FavGames from "../components/FavGames";
import Sumary from "../components/Sumary";
import cyberpunk from "../assets/Banner.png";
import ItensCart from "../components/ItensCart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "../assets/Logo.png";
import perfito from "../assets/profile.png";

const Cart = () => {
  return (
    <div>
      <Header Logo={logo} Profile={perfito}/>
      <div className="container min-vh-100 text-white py-5 px-md-5">
        <div className="row justify-content-between">
          {/* Lista de jogos */}
          <div className="col-12 col-lg-7 mb-4">
            <h3 className="mb-4 fs-2 fw-bold">Your shopping cart</h3>
            <div className="d-flex flex-column gap-3">
              <ItensCart
                Banner={cyberpunk}
                titulo="Cyberpunk 2077"
                genero="RPG"
                preco={79.95}
              />
              <ItensCart
                Banner={cyberpunk}
                titulo="Hogwarts Legacy"
                genero="RPG"
                preco={98.95}
              />
              <ItensCart
                Banner={cyberpunk}
                titulo="Elden Ring"
                genero="Ação"
                preco={69.95}
              />
            </div>
            <div className="text-end">
              <button className="btn btn-link text-decoration-none text-white opacity-75">
                Remove all
              </button>
            </div>
          </div>

          {/* Sumário */}
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-start py-1">
            <h1 className="fw-bold fs-2 text-center">Order Summary</h1>
            <div className=" d-flex align-items-center justify-content-center">
              <Sumary jogo={"cyberpunk"} preco={79.89} />
            </div>
          </div>
        </div>
      </div>
      <Footer Logo={logo}/>
    </div>
  );
};

export default Cart;
