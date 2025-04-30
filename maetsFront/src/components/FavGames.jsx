import React from "react";

const FavGames = (props) => {
  return (
    <div className="d-flex conteudo p-1 container rounded-3 rounded-bottom-0">
      <div className="favGamesFundo w-50 pt-2 rounded-3 container perfil mt-3">
        <div className="mobile d-flex p-3">
          <img className="rounded-1 responsiva" src={props.Banner} alt="" />
          <div className="ms-3 mt-2">
            <h1 className="fw-semibold fs-3">{props.titulo}</h1>
            <span className="genero">{props.genero}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavGames;
