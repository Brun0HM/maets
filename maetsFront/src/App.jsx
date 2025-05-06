import React from "react";
import Header from "./components/Header";
import logo from "./assets/logo.png";
import profile from "./assets/Profile.png";
import "./App.css";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import logo from "./assets/Logo.png";
import Modal from "./components/Modal";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>

      <Header Logo={logo} Profile={profile}/>
      {/* <Profile Logo={logo} />
      <Home /> */}
      <Payment />
      < Footer Logo={logo} />
      <Modal/>
    </div>
  );
};

export default App;
