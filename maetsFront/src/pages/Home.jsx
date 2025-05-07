import React from "react";
import Destaque from "../components/Destaque";
import banner from "../assets/jojo.png";
import Header from "../components/Header";
import fotinha from "../assets/fotinha.png";
import CardGame from "../components/CardGame";


const Home = (props) => {
  return (
    <div>
      <Destaque
        titulo={"JoJo's Bizarre Adventure: All-Star Battle R "}
        descricao={
          "JoJo's Bizarre Adventure: All-Star Battle R é um jogo de luta baseado no popular mangá e anime JoJo's Bizarre Adventure. O jogo apresenta uma variedade de personagens jogáveis."
        }
        preco={"R$ 199,99"}
        banner={banner}
        fotinha={fotinha}
      />
      <hr className="container" />
      <div className="container d-flex overflow-x-scroll scroller">
        <div className="d-flex">
          {props.game.map((game, index) => (
            <div className="" key={index}>
              <CardGame
                title={game.title}
                descricao={game.descricao}
                banner={game.banner}
                imagem={game.imagem}
                genero={game.genero}
                preco={game.preco}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
