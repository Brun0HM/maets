import React from "react";

const FormCupom = () => {
  return (
    <div className="Centro d-flex align-items-center justify-content-center p-3">
      <div
        className="FundoForm w-100 w-md-75 w-lg-50 pt-5 pb-5 d-flex flex-column align-items-center rounded-3"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="text-center mb-4">
          <strong>Cadastro de Cupom</strong>
        </h1>

        <div className="CodeCupom d-flex flex-column w-100 px-4">
          {/* Código */}
          <div className="mb-3">
            <label htmlFor="">Code</label>
            <input
              className="mt-1 form-control inputCredit border-0 text-light"
              type="text"
            />
          </div>

          {/* Descrição */}
          <div className="mb-3">
            <label htmlFor="">Description</label>
            <input
              className="mt-1 form-control inputCredit border-0 text-light"
              type="text"
            />
          </div>

          {/* Inputs lado a lado que se adaptam */}
          <div className="d-flex flex-column flex-md-row gap-3">
            <div className="flex-fill d-flex flex-column">
              <label htmlFor="">Discount</label>
              <input
                className="mt-1 form-control inputCredit border-0 text-light"
                type="number"
              />
            </div>

            <div className="flex-fill d-flex flex-column">
              <label htmlFor="">Max Uses</label>
              <input
                className="mt-1 form-control inputCredit border-0 text-light"
                type="number"
              />
            </div>

            <div className="flex-fill d-flex flex-column">
              <label htmlFor="">End Date</label>
              <input
                className="mt-1 form-control inputCredit border-0 text-light"
                type="date"
              />
            </div>
          </div>
        </div>
        {/* Botão */}
        <button className="btn text-light btnCor border-0 mt-4 w-50  w-md-50">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormCupom;
