import React from "react";

const Sumary = (props) => {
  return (
    <div className="row">
      <div className="conteudo p-4 rounded-3">
        <h2 className="text-start ms-2 fs-3 fw-medium">Itens</h2>
        <div className="container d-flex flex-column align-items-center">
          <div className="d-flex justify-content-between gap-3 w-100">
            <h4 className="fs-5">{props.jogo}</h4>
            <h4 className="fs-5">${props.preco}</h4>
          </div>
          <hr className="w-100" />
          <div className="d-flex justify-content-between w-100">
            <h4>Total</h4>
            <h4 className="fs-5">${props.preco}</h4>
          </div>
          <div>
            <h6 className="btn text-light btnCor ps-5 mt-3 pt-2 pb-2 pe-5">
              Checkout
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sumary;
