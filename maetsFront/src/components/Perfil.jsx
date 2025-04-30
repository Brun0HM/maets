import React from "react";

const Perfil = (props) => {
  return (
    <div className="perfil">
      <img className="mt-4 mb-4 ms-4" src={props.Logo} alt="" />
      <div className="d-flex conteudo p-5 container border-0 rounded-3 rounded-bottom-0">
        <img className="rounded-3 m-3" src={props.Profile} alt="" />
        <div className="profile d-flex flex-column justify-content-center">
          <h1 className="marginha fw-semibold">Leon Martins</h1>
          <div className="d-flex">
            <p className="">Edit Profile</p>
            <i className="bi bi-caret-right-fill"></i>
          </div>
          <div className="text-dark d-flex align-items-center rounded-4 tamanho mb-2 level gap-2">
            <span className="m-2 border border-2 border-black rounded-circle">
              35
            </span>
            <span className="">Colector</span>
          </div>
        </div>
      </div>
      <h1 className="conteudo container pb-1">Favorite Games</h1>
    </div>
  );
};

export default Perfil;
