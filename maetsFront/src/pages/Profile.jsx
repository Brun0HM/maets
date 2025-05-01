import React from "react";
import "../App.css";
import Perfil from "../components/Perfil";
import FavGames from "../components/FavGames";
import logo from "../assets/logo.png";
import profile from "../assets/Profile.png";
import cyberpunk from "../assets/banner.png";
import hogwarts from "../assets/hogwarts.webp";
import eldenRing from "../assets/eldenring.avif";

const Profile = () => {
  return (
    <div className="">
      <Perfil Logo={logo} Profile={profile} />
      <div className="conteudo container rounded-3">
        <h1 className="fw-bold d-flex justify-content-center pt-3">
          Favorite Games
        </h1>
        <FavGames Banner={cyberpunk} titulo={"Cyberpunk"} genero={"RPG"} />
        <FavGames Banner={hogwarts} titulo={"Hogwarts Legacy"} genero={"RPG"} />
        <FavGames Banner={eldenRing} titulo={"Elden Ring"} genero={"Ação"} />
      </div>
    </div>
  );
};

export default Profile;
