import React from "react";
import Destaque from "../components/Destaque";
import banner from "../assets/jojo.png";
import Header from "../components/Header";
import fotinha from "../assets/fotinha.png";

const Home = () => {
  return (
    <div>
      <Header />
      <Destaque
        titulo={"JoJo's Bizarre Adventure: All-Star Battle R "}
        descricao={
          "JoJo's Bizarre Adventure: All-Star Battle R é um jogo de luta baseado no popular mangá e anime JoJo's Bizarre Adventure. O jogo apresenta uma variedade de personagens jogáveis."
        }
        preco={"R$ 199,99"}
        Banner={banner}
        fotinha={fotinha}
      />
      <hr className="container" />
      
    </div>
  );
};

export default Home;
