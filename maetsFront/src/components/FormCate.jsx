import React from "react";

const FormCate = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div
        className="conteudo w-100 p-4 p-md-5 d-flex flex-column align-items-center rounded-3"
        style={{ maxWidth: "600px", backgroundColor: "#1a1a1a" }} // cor opcional para visual
      >
        <h1 className="text-center mb-4 text-light">
          <strong>Cadastro de Categoria</strong>
        </h1>
        <div className="CodeCupom d-flex flex-column w-100">
          {/* Title */}
          <div className="mb-3">
            <label htmlFor="title" className="text-light">
              Title
            </label>
            <input
              id="title"
              className="mt-1 form-control inputCredit border-0 text-light "
              type="text"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn text-light btnCor border-0 mt-4 w-100 w-md-50">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCate;
