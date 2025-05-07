import React from "react";

const ItensCart = ({name, price, banner, genre, onRemove}) => {
  console.log(genre)
  return (
    <div className="container mb-3">
      <div className="favGamesFundo rounded-3 p-3 d-flex flex-column flex-md-row justify-content-between align-items-start">
        {/* Imagem e informações */}
        <div className="d-flex">
          <img className="rounded me-3 responsiva" src={banner} alt={name}/>
          <div>
            <h1 className="fw-semibold fs-4 mb-1">{name}</h1>
            <span className="genero">{genre}</span>
          </div>
        </div>
        
        {/* Preço e lixeira */}
        <div className="d-flex flex-column align-items-lg-end  mt-3 mt-md-0">
          <h4 className="fs-5 mb-2">${price}</h4>
          <i className="bi bi-trash fs-5 genero" role="button"  onClick={onRemove}></i>
        </div>
      </div>
    </div>
  );
};

export default ItensCart;
