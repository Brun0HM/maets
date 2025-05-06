import React from "react";

const Footer = (props) => {
  return (
    <div className="m-4">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-none d-md-grid"></div>
        <img className="" src={props.Logo} alt="" />
        <div className="d-flex flex-column justify-content-end align-items-end">
          <div className="d-flex justify-content-end align-items-center gap-1">
            <i class="bi bi-github"></i>
            <a
              className="text-decoration-none text-white fw-medium"
              href="github.com"
            >
              Brun0HM
            </a>
          </div>
          <div className="d-flex justify-content-end align-items-center gap-1">
            <i class="bi bi-github"></i>
            <a
              className="text-decoration-none text-white fw-medium"
              href="github.com"
            >
              Brun0HM
            </a>
          </div>
          <div className="d-flex justify-content-end align-items-center gap-1">
            <i class="bi bi-github"></i>
            <a
              className="text-decoration-none text-white fw-medium"
              href="github.com"
            >
              Brun0HM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
