import React from "react";

const FormGames = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div
        className="conteudo w-100 p-4 p-md-5 d-flex flex-column align-items-center rounded-3"
        style={{ maxWidth: "600px", backgroundColor: "#1a1a1a" }} // cor opcional para visual
      >
        <h1 className="text-center mb-4 text-light">
          <strong>Cadastro de Games</strong>
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

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="text-light">
              Description
            </label>
            <input
              id="description"
              className="mt-1 form-control inputCredit border-0 text-light "
              type="text"
            />
          </div>

          {/* Image */}
          <div className="mb-3">
            <label htmlFor="image" className="text-light">
              Image
            </label>
            <input
              id="image"
              className="mt-1 form-control inputCredit border-0 text-light "
              type="file"
            />
          </div>

          {/* Banner */}
          <div className="mb-3">
            <label htmlFor="banner" className="text-light">
              Banner
            </label>
            <input
              id="banner"
              className="mt-1 form-control inputCredit border-0 text-light"
              type="file"
            />
          </div>
          <div className="d-flex gap-2 justify-content-around">
            <div className="mb-3">
              <label htmlFor="genre" className="text-light">
                Genre
              </label>
              <input
                id="genre"
                className="mt-1 form-control inputCredit border-0 text-light "
                type="search"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="genre" className="text-light">
                Price
              </label>
              <input
                id="genre"
                className="mt-1 form-control inputCredit border-0 text-light "
                type="number"
              />
            </div>
          </div>

          {/* Genre */}

          {/* Botão */}
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

export default FormGames;
