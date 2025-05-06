import React from "react";

const Modal = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="Modal d-flex p-4">
          <div className="Ibagens">
            <img src="https://placehold.co/580x330" alt="" />
            <div className="Fts d-flex mt-2 gap-2">
              <img src="https://placehold.co/115x65" alt="" />
              <img src="https://placehold.co/115x65" alt="" />
              <img src="https://placehold.co/115x65" alt="" />
              <img src="https://placehold.co/115x65" alt="" />
            </div>
          </div>
          <div className="informachions m-5 me-0 mt-0 mb-0 align-items-center justify-content-center ">
            <div className="GameInfo">
              <h3 className="mt-3">Game Name</h3>
              <p className="GameInfo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                eligendi rerum, ea magni minima aperiam magnam vero voluptatibus
                praesentium quas porro, enim molestias aliquid unde dolore
                doloribus voluptatem possimus corrupti?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
