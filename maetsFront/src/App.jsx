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
  return (
    <div>
      <EditProfile />
    </div>

  );
};

export default App;
