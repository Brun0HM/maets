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
import PayCard from "./components/PayCard";
import CardGame from "./components/CardGame";

const App = () => {
  const game = [
    {
      title: "Hades",
      descricao:
        "Hades é um roguelike dungeon crawler onde você joga como Zagreus, filho de Hades, tentando escapar do submundo.",
      banner: "https://placehold.co/580x330",
      imagem: "https://placehold.co/250x350",
      genero: "Roguelike, Ação, Indie",
      preco: 49.99,
    },
    {
      title: "The Witcher 3: Wild Hunt",
      descricao:
        "Um RPG de mundo aberto onde você é Geralt de Rívia, um caçador de monstros em uma jornada épica cheia de escolhas e consequências.",
      banner: "https://placehold.co/580x330",
      imagem: "https://placehold.co/250x350",
      genero: "RPG, Mundo Aberto, Fantasia",
      preco: 99.9,
    },
    {
      title: "Stardew Valley",
      descricao:
        "Assuma a fazenda do seu avô em Stardew Valley, cultivando, criando animais, minerando, pescando e se relacionando com os aldeões.",
      banner: "https://placehold.co/580x330",
      imagem: "https://placehold.co/250x350",
      genero: "Simulação, Agricultura, Indie",
      preco: 24.9,
    },
    {
      title: "Hollow Knight",
      descricao:
        "Explore as ruínas de Hallownest neste metroidvania desafiador com combate preciso e um mundo desenhado à mão.",
      banner: "https://placehold.co/580x330",
      imagem: "https://placehold.co/250x350",
      genero: "Metroidvania, Ação, Indie",
      preco: 36.9,
    },
    {
      title: "Celeste",
      descricao:
        "Ajude Madeline a escalar a Montanha Celeste em um jogo de plataforma desafiador com narrativa sensível e trilha marcante.",
      banner: "https://placehold.co/580x330",
      imagem: "https://placehold.co/250x350",
      genero: "Plataforma, Desafio, Indie",
      preco: 29.9,
    },
  ];
  

  return (
    <>
      <Header title={game[0].title} descricao={game[0].descricao} preco={game[0].preco} banner={game[0].banner} />
      <Home game={game} />
    </>
  );
};

export default App;
