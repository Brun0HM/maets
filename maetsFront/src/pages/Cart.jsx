import React from "react";
import ItensList from "../components/ItensList";
import Sumary from "../components/Sumary";

const Cart = () => {
  return (
    <div className="container d-flex">
      <ItensList />
      <Sumary jogo={"Cyberpunk 2077"} preco={79.95} />
    </div>
  );
};

export default Cart;
