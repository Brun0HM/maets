import React from "react";

const FavGames = (props) => {
  return (
    <div className="d-flex rounded-bottom-3 conteudo  container">
      <div className="favGamesFundo pt-2  rounded-3 container perfil mt-3 mb-3">
        <div className="mobile d-flex start-0 p-3">
          <img className="rounded responsiva " src={props.Banner} alt="" />
          <div className=" ms-0 ms-md-2 mt-2">
            <h1 className="fw-semibold fs-3">{props.titulo}</h1>
            <span className="genero me-3 me-md-0">{props.genero}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavGames;
