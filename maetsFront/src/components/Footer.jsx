import React from "react";

const Footer = (props) => {
  return (
    <div className="m-4">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-none d-md-grid"></div>
        <img className="" src={props.Logo} alt="" />
        <div className="d-flex flex-column justify-content-end align-items-end">
          <div className="d-flex justify-content-end align-items-center gap-1">
            <i className="bi bi-github"></i>
            <a
              className="text-decoration-none text-white fw-medium"
              href="https://github.com/Brun0HM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brun0HM
            </a>
          </div>
          <div className="d-flex justify-content-end align-items-center gap-1">
            <i className="bi bi-github"></i>
            <a
              className="text-decoration-none text-white fw-medium"
              href="https://github.com/rattin1"
              target="_blank"
              rel="noopener noreferrer"
            >
              rattin1
            </a>
          </div>
          <div className="d-flex justify-content-end align-items-center gap-1">
            <i className="bi bi-github"></i>
            <a
              className="text-decoration-none text-white fw-medium"
              href="https://github.com/ThiagoM22"
              target="_blank"
              rel="noopener noreferrer"
            >
              ThiagoM22
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
