import React from "react";

const Destaque = (props) => {
  return (
    <div className="container py-4">
      <div className="row align-items-center justify-content-center">
        {/* Banner */}
        <div className="col-12 col-md-8 mb-4 mb-md-0 d-flex justify-content-center">
          <img
            className="rounded-4 img-fluid w-100 w-md-75"
            src={props.banner}
            alt="Banner"
          />
        </div>

        {/* Conteúdo */}
        <div className="col-12 col-md-4">
          <div className="Destaque rounded-2 p-3 mb-3">
            <h2 className="fw-semibold fs-4">{props.titulo}</h2>
            <span className="fs-6">{props.descricao}</span>
            <span className="fw-medium fs-4 d-block mt-2">{props.preco}</span>
            <button className="btn btn-primary mt-3 d-flex align-items-center justify-content-center gap-2">
              <i className="bi bi-cart-plus-fill"></i> Adicionar ao carrinho
            </button>
          </div>

          {/* Miniaturas */}
          <div className="d-flex gap-2">
            <img
              className="img-fluid rounded-3 w-50"
              src={props.fotinha}
              alt="Miniatura 1"
            />
            <img
              className="img-fluid rounded-3 w-50"
              src={props.fotinha}
              alt="Miniatura 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destaque;
