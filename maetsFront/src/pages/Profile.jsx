import React from "react";
import "../App.css";
import Perfil from "../components/Perfil";
import FavGames from "../components/FavGames";
import logo from "../assets/logo.png";
import profile from "../assets/Profile.png";
import cyberpunk from "../assets/banner.png";
import hogwarts from "../assets/hogwarts.webp";
import eldenRing from "../assets/eldenring.avif";
import AllGames from "../components/AllGames";
import rdr2 from "../assets/rdr2.jpg";

const Profile = (props) => {
  return (
    <div>
      <img className="m-4" src={props.Logo} alt="Logo Maets" />
      <div className="container">
        <Perfil Profile={profile} />
      </div>

      <div className="d-flex ms-4 me-4 row">
        <div className="conteudo rounded-3 col-12 col-md-6 container-md alinha">
          <h1 className="fw-bold pt-3">Favorite Games</h1>
          <FavGames Banner={cyberpunk} titulo={"Cyberpunk"} genero={"RPG"} />
          <FavGames
            Banner={hogwarts}
            titulo={"Hogwarts Legacy"}
            genero={"RPG"}
          />
          <FavGames Banner={eldenRing} titulo={"Elden Ring"} genero={"Ação"} />
        </div>
        <div className="conteudo container w-auto rounded-3 col-12 col-md-6 mt-3 mt-md-0">
          <h1 className="fw-bold d-flex justify-content-center pt-3">
            All Games
          </h1>
          <AllGames Banner={cyberpunk} />
          <AllGames Banner={hogwarts} />
          <AllGames Banner={eldenRing} />
          <AllGames Banner={rdr2} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
