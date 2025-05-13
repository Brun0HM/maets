import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";


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
      <Header />
      <Home game={game} />
    </>
  );
};

export default App;
