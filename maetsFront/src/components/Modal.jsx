import React from "react";

const Modal = (props) => {
  const handleAddToCart = () => {
    const game = {
      title: props.title,
      descricao: props.descricao,
      banner: props.banner,
      preco: props.preco,
      genre: props.genero,
    };

    // Recupera o carrinho atual do LocalStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Adiciona o novo jogo ao carrinho
    cart.push(game);

    // Salva o carrinho atualizado no LocalStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Fecha o modal
    props.click();
  };

  return (
    <div
      className="d-flex modalBackdrop align-items-center justify-content-center"
      onClick={props.click}
    >
      <div className="container d-flex align-items-center justify-content-center p-5">
        <div className="Modal gamemodal row bg-dark text-white rounded-3 p-5">
          <div className="Ibagens col-12 col-md-6 mb-4 mb-md-0">
            <img className="rounded-3 img-fluid" src={props.banner} alt="" />
          </div>
          <div className="informachions col-12 col-md-6 d-flex flex-column justify-content-center">
            <h3>{props.title}</h3>
            <span className="mt-0 mb-3 genero">{props.genero}</span>
            <p>{props.descricao}</p>
            <p>
              <strong>Preço:</strong> R$ {props.preco}
            </p>
            <button
              className="btn btn-dark btnCor border-0 w-100 BtnTamanho mt-4"
              onClick={handleAddToCart}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
