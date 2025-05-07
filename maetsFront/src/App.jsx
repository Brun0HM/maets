import React from "react";
import Header from "./components/Header";
import logo from "./assets/logo.png";
import perfito from "./assets/Profile.png";
import "./App.css";
import Login from "./pages/Login";
import Modal from "./components/Modal";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import DashBoard from "./pages/DashBoard";
import TablesAdmin from "./components/TablesAdmin";
import FormCupom from "./components/FormCupom";
import FormGames from "./components/FormGames";
import FormCate from "./components/FormCate";
import EditProfile from "./pages/EditProfile";

const App = () => {
  const game = [
    {
      nome: "The Witcher 3: Wild Hunt",
      descricao:
        "Torne-se um caçador de monstros profissional e embarque numa jornada épica para encontrar a Criança da Profecia, num mundo aberto cheio de escolhas morais e consequências.",
      banner:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_600x900.jpg",
      genero: "RPG, Mundo Aberto, Fantasia",
    },
    {
      nome: "Hollow Knight",
      descricao:
        "Explore cavernas vastas, enfrente criaturas corrompidas e descubra mistérios antigos num mundo subterrâneo desenhado à mão.",
      banner:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/library_600x900.jpg",
      genero: "Metroidvania, Ação, Indie",
    },
    {
      nome: "Stardew Valley",
      descricao:
        "Deixe a cidade para trás e comece uma nova vida cultivando, pescando, minerando e construindo laços com a comunidade local.",
      banner:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/library_600x900.jpg",
      genero: "Simulação, Agricultura, Casual",
    },
    {
      nome: "DOOM Eternal",
      descricao:
        "Lute contra hordas demoníacas com armas destrutivas e movimentação agressiva neste aclamado FPS.",
      banner:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg",
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/library_600x900.jpg",
      genero: "Ação, Tiro, Gore",
    },
    {
      nome: "Hades",
      descricao:
        "Desafie o deus da morte neste aclamado roguelike da Supergiant Games, com combates rápidos, narrativa rica e visual estilizado.",
      banner:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/library_600x900.jpg",
      genero: "Roguelike, Ação, Indie",
    },
  ];

  return (
    <div>
      <EditProfile />
    </div>
  );
};

export default App;
