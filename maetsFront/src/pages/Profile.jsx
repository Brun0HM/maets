import React from "react";
import "../App.css";
import Perfil from "../components/Perfil";
import FavGames from "../components/FavGames";
import logo from "../assets/logo.png";
import profile from "../assets/Profile.png";

const Profile = () => {
  return (
    <div className="">
      <Perfil Logo={logo} Profile={profile} />
      {/* <FavGames /> */}
    </div>
  );
};

export default Profile;
