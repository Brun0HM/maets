import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = (props) => {
  const [username, setUsername] = useState("");
  const [foto, setFoto] = useState("");

  useEffect(() => {
    // Recupera os dados do localStorage quando o componente for montado
    const storedData = JSON.parse(localStorage.getItem("devlogin"));

    if (storedData) {
      if (storedData.username) {
        setUsername(storedData.username);
      }
      if (storedData.foto) {
        setFoto(storedData.foto);
      }
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="container-fluid">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center pe-4 text-decoration-none"
        >
          <img src={props.Logo} alt="Logo" height="40" />
        </Link>

        {/* Botão de colapso para dispositivos menores */}
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Conteúdo da Navbar */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="d-flex flex-column flex-lg-row flex-grow-1 align-items-center gap-3">
            {/* Campo de Pesquisa */}
            <div className="input-group mt-2 row">
              <input
                className="border-0 rounded-2 conteudo text-light col-10 col-md-5 align-items-center justify-content-center rounded-end-0"
                placeholder="Search..."
                type="text"
              />
              <i className="bi bi-search btn conteudo text-light col-2 col-md-1 text-end"></i>
            </div>
          </div>

          {/* Perfil e Carrinho */}
          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-4 mt-3 mt-lg-0">
            <div className="d-flex align-items-center justify-content-between gap-2">
              {/* Nome e botão de perfil */}
              <div className="text-end">
                <h1 className="text-light fw-bold mb-0 fs-5">
                  {" "}
                  Welcome, {username || "Guest"}!{" "}
                </h1>
                <Link to="/profile" className="text-decoration-none text-light">
                  <i className="bi bi-chevron-down me-1 text-light"></i> See
                  Profile
                </Link>
              </div>

              {/* Imagem do Perfil */}
              <img
                className="rounded-2"
                width="60px"
                height="60px"
                src={foto || props.Profile}
                alt="profile"
              />
            </div>

            {/* Ícone do Carrinho */}
            <Link to="/cart" role="button" className="text-decoration-none">
              <div className="row d-flex align-items-center justify-content-start">
                <i
                  className="bi bi-cart3 text-light fs-4 btn d-flex align-items-center justify-content-center col-4 col-md-12 conteudo p-md-3"
                  width="60px"
                  height="60px"
                ></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
