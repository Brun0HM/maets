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
import PurchaseSummary from "./components/PurchaseSummary";
import CardGame from "./components/CardGame";

const App = () => {
  const game = [
    {
      title: "The Witcher 3: Wild Hunt",
      descricao:
        "Torne-se um caçador de monstros profissional e embarque numa jornada épica para encontrar a Criança da Profecia, num mundo aberto cheio de escolhas morais e consequências.",
      banner: "https://placehold.co/580x330",
      imagem: "https://placehold.co/250x350",
      genero: "RPG, Mundo Aberto, Fantasia",
    },
    {
      title: "Hollow Knight",
      descricao:
        "Explore cavernas vastas, enfrente criaturas corrompidas e descubra mistérios antigos num mundo subterrâneo desenhado à mão.",
      banner: "https://placehold.co/580x330",
      imagem: "https://placehold.co/250x350",
      genero: "Metroidvania, Ação, Indie",
    },
    {
      title: "Stardew Valley",
      descricao:
        "Deixe a cidade para trás e comece uma nova vida cultivando, pescando, minerando e construindo laços com a comunidade local.",
      banner: "https://placehold.co/580x330",
      imagem: "https://placehold.co/250x350",
      genero: "Simulação, Agricultura, Casual",
    },
    {
      title: "DOOM Eternal",
      descricao:
        "Lute contra hordas demoníacas com armas destrutivas e movimentação agressiva neste aclamado FPS.",
      banner: "https://placehold.co/580x330",
      imagem: "https://placehold.co/250x350",
      genero: "Ação, Tiro, Gore",
    },
    {
      title: "Hades",
      descricao:
        "Desafie o deus da morte neste aclamado roguelike da Supergiant Games, com combates rápidos, narrativa rica e visual estilizado.",
      banner: "https://placehold.co/580x330",
      imagem: "https://placehold.co/250x350",
      genero: "Roguelike, Ação, Indie",
    },
  ];

  return <>
  <Header/>
  <Home game={game}/>
  </>;
  return (
    <div>
      
    </div>
  );
};

export default App;
