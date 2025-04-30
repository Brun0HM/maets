import React from "react";
import "../App.css";

const Header = (props) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center px-4 pt-4">
        {/* Logo e Pesquisar */}
        <div className="d-flex align-items-center gap-3">
          {/* Logo */}
          <img src={props.Logo} alt="Logo" />

          {/* Pesquisar */}
          <div className="d-flex">
            <input
              className="form-control border-0 carrinho text-light inputTamanho align-items-center justify-content-center rounded-end-0"
              placeholder="Search..."
              type="text"
            />
            <i className="bi bi-search text-light btn carrinho rounded-start-0"></i>
          </div>
        </div>

        {/* Perfil Nome e See Profile */}
        <div className="d-flex align-items-center gap-3">
          <div className="text-end">
            <h1 className="text-light fw-bold mb-0 fs-4">Leon Martins</h1>
            <h4 role="button" className="text-secondary mt-0 mb-2 fs-5">
              <i className="bi bi-chevron-down me-2"></i>
              See Profile
            </h4>
          </div>

          {/* Perfil Imagem */}
          <img
            className="rounded-2 profilesize"
            src={props.Profile}
            alt="profile"
          />

          {/* Carrinho */}
          <i className="bi bi-cart3 text-light fs-4 profilesize btn carrinho d-flex align-items-center justify-content-center"></i>
        </div>
      </div>
    </>
  );
};

export default Header;