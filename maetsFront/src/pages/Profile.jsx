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
      <div>
        <FavGames Banner={cyberpunk} titulo={"Cyberpunk"} genero={"RPG"} />
        <FavGames Banner={hogwarts} titulo={"Hogwarts Legacy"} genero={"RPG"} />
        <FavGames Banner={eldenRing} titulo={"Elden Ring"} genero={"Ação"} />
      </div>
    </div>
  );
};

export default Profile;
