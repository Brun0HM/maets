import React from "react";

const Perfil = (props) => {
  return (
    <div>
      <img className="mt-4 ms-4" src={props.Logo} alt="" />
      <div className="d-flex border-0 rounded-3 conteudo">
        <img className="rounded-3 m-3" src={props.Profile} alt="" />
        <div className="profile d-flex flex-column justify-content-center">
          <h1 className="marginha fw-semibold">Leon Martins</h1>
          <div className="d-flex">
            <p className="">Edit Profile</p>
            <i className="bi bi-caret-right-fill"></i>
          </div>
          <div className="text-dark d-flex justify-content-center align-items-center rounded-4 level gap-2">
            <span className="border border-2 border-black rounded-circle p-1">
              35
            </span>
            <span className="">Colector</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
