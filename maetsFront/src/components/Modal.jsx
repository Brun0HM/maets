import React from "react";

const Modal = (props) => {
  return (
    <>
      <div className=" d-flex modalBackdrop align-items-center justify-content-center" onClick={props.click}>
        <div className="container d-flex align-items-center justify-content-center">
          <div className="Modal gamemodal row bg-dark text-white rounded-3 p-4">
            <div className="Ibagens col-12 col-md-6 mb-4 mb-md-0">
              <img
                className="rounded-3 img-fluid"
                src={props.banner}
                alt=""
              />
              <div className="Fts d-flex mt-2 gap-2 overflow-x-scroll scroller">
                <img
                  className="rounded-3 img-fluid"
                  src="https://placehold.co/115x65"
                  alt=""
                />
                <img
                  className="rounded-3 img-fluid"
                  src="https://placehold.co/115x65"
                  alt=""
                />
                <img
                  className="rounded-3 img-fluid"
                  src="https://placehold.co/115x65"
                  alt=""
                />
              </div>
            </div>
            <div className="informachions col-12 col-md-6 d-flex flex-column justify-content-center">
              <div className="GameInfo">
                <h3 className="mt-3 m-0">{props.title}</h3>
                <label className="mb-3" htmlFor="">
                  {props.genero}
                </label>
                <p className="GameInfo">
                  {props.descricao}
                </p>
                <button className="btn btn-dark btnCor border-0 w-100 BtnTamanho mt-4">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
