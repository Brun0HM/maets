import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "../App.css";
import Perfil from "../components/Perfil";
import FavGames from "../components/FavGames";
import cyberpunk from "../assets/Banner.png";
import hogwarts from "../assets/Hogwarts.webp";
import eldenRing from "../assets/eldenring.avif";
import AllGames from "../components/AllGames";
import rdr2 from "../assets/rdr2.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "../assets/Logo.png";

const Profile = () => {
  const [foto, setFoto] = useState('');

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('devlogin'));
    if (storedData && storedData.foto) {
      setFoto(storedData.foto);  // Atualiza com a foto salva
    }
  }, []);

  return (
    <div>
      <Header Logo={logo} />  {/* Passando a foto de perfil */}
      <div className="container d-flex align-items-start mb-5 ps-4 pb-5"></div>
      <Perfil Profile={foto} />  {/* Passando a foto de perfil */}
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
      <Footer Logo={logo} />
    </div>
  );
};

export default Profile;
