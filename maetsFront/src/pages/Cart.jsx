import React from "react";
import Sumary from "../components/Sumary";
import FavGames from "../components/FavGames";
import cyberpunk from "../assets/Banner.png";

const Cart = () => {
  return (
    <div className="row overflow-x-hidden">
      <div className="container d-flex w-100 gap-5 align-items-center justify-content-center">
        <div className="w-50">
          <FavGames Banner={cyberpunk} titulo={"Cyberpunk"} genero={"RPG"} />
        </div>
        <Sumary jogo={"Cyberpunk 2077"} preco={79.95} />
      </div>
    </div>
  );
};

export default Cart;
