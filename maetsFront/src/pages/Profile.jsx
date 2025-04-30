import React from "react";
import "../App.css";

const Profile = (props) => {
  return (
    <div className="">
      <img className="mt-4 ms-4" src={props.Logo} alt="" />
      <div className="container border-0 rounded-1 conteudo">
        <div className="profile d-flex justify-content-center align-items-center">
          <img className="rounded-3 m-3" src={props.Profile} alt="" />
          <h1 className="marginha fw-semibold">Leon Martins</h1>
          <div className="d-flex">
            <p className="">Edit Profile</p>
            <i className="bi bi-caret-right-fill"></i>
          </div>
          <div className="text-dark d-flex rounded-1 level">
            <p className="p-1">35</p>
            <p className="p-1">Colector</p>
          </div>
        </div>
        <div className="d-flex">
          <h1 className="fw-semibold text-left">Favorite Games</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
