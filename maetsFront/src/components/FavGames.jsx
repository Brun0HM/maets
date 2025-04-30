import React from "react";

const FavGames = (props) => {
  return (
    <div className="conteudo">
      <img className="rounded-1" src={props.Banner} alt="" />
      <h1 className="fw-semibold">{props.titulo}</h1>
      <p className="genero">{props.genero}</p>
    </div>
  );
};

export default FavGames;
