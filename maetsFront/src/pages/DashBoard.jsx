import React from "react";

const DashBoard = () => {
  return (
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
  );
};

export default DashBoard;
