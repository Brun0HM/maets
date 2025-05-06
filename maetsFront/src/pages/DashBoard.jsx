import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "../assets/Logo.png";
import perfito from "../assets/profile.png";

const DashBoard = () => {
  return (
    <div>
       <Header Logo={logo} Profile={perfito}/>
      <div className="container d-flex justify-content-center gap-2 mt-5 flex-column flex-md-row">
        <button className="p-5 conteudo rounded-2 btn btn-dark border-0 fs-3 col-12 col-md-4 responsiva ">
          Categorias
        </button>
        <button className="p-5 conteudo rounded-2 btn btn-dark border-0 fs-3 col-12 col-md-4">
          Cupons
        </button>
        <button className="p-5 conteudo rounded-2 btn btn-dark border-0 fs-3  col-12 col-md-4">
          Games
        </button>
      </div>
      <Footer Logo={logo}/>
    </div>
  );
};

export default DashBoard;
