import React from "react";

const Carrocel = (props) => {
  return (
    <div className="container pt-3 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <img
            className="img-fluid rounded-3 banner-grande"
            src={props.Banner2}
            alt="Banner Principal"
          />
        </div>
        <div className="col-12 col-md-8 pt-3 pt-md-0 d-flex justify-content-center align-items-center">
          <div className="carrossel-scroll d-flex justify-content-center">
            {[props.Banner3, props.Banner4, props.Banner5, props.Banner6].map(
              (banner, index) => (
                <img
                  key={index}
                  className="img-fluid rounded-3 banner-pequeno mx-2"
                  src={banner}
                  alt={`Miniatura ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrocel;
