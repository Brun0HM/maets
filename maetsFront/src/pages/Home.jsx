import React from "react";
import Destaque from "../components/Destaque";
import banner from "../assets/jojo.png";
import Header from "../components/Header";
import fotinha from "../assets/fotinha.png";
import Carrocel from "../components/Carrocel";
import elden from "../assets/eldenring.avif";
import rdr from "../assets/rdr2.jpg";
import hl from "../assets/Hogwarts.webp";
import cyberpunk from "../assets/Banner.png";

const Home = () => {
  return (
    <div>
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
      <Carrocel
        Banner={banner}
        Banner2={elden}
        Banner3={rdr}
        Banner4={hl}
        Banner5={cyberpunk}
        Banner6={elden}
      />
    </div>
  );
};

export default Home;
