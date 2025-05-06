import React from "react";

const TablesAdmin = () => {
  return (
    <div className="container conteudo rounded-3 d-flex flex-column align-items-center justify-content-center mt-5 pb-3">
      <div className="input-group mt-2 d-flex justify-content-center">
        <input
          className="border-0 rounded-2 conteudo text-light align-items-center justify-content-center rounded-end-0"
          placeholder="Search..."
          type="text"
        />
        <i className="bi bi-search btn conteudo text-light text-end"></i>
      </div>
      <div className="d-flex flex-column w-50 mt-2 favGamesFundo p-2 rounded-2 overflow-x-auto">
        {/* Linha 1 */}
        <div className="row mb-2">
          <div className="col-6 text-start">
            <span>Nome</span>
          </div>
          <div className="col-6 text-end">
            <span className="genero fw-light">6328790</span>
            <div>
              <a className="generoTabela" href="#">
                <i class="bi bi-pencil-square me-1"></i>
              </a>
              <a className="generoTabela" href="#">
                <i class="bi bi-trash3"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Linha 2 */}
        <div className="row mb-2">
          <div className="col-6 text-start">
            <span>Nome</span>
          </div>
          <div className="col-6 text-end">
            <span className="genero fw-light">6328790</span>
            <div>
              <a className="generoTabela" href="#">
                <i class="bi bi-pencil-square me-1"></i>
              </a>
              <a className="generoTabela" href="#">
                <i class="bi bi-trash3"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Linha 3 */}
        <div className="row mb-2">
          <div className="col-6 text-start">
            <span>Nome</span>
          </div>
          <div className="col-6 text-end">
            <span className="genero fw-light">6328790</span>
            <div>
              <a className="generoTabela" href="#">
                <i class="bi bi-pencil-square me-1"></i>
              </a>
              <a className="generoTabela" href="#">
                <i class="bi bi-trash3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablesAdmin;
