import React from "react";
import Header from "./components/Header";
import logo from "./assets/logo.png";
import profile from "./assets/Profile.png";
import "./App.css";
import Login from "./pages/Login";
import Modal from "./components/Modal";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Header Logo={logo} Profile={profile} />
      {/* <Profile Logo={logo} />
      <Home /> */}
      <Payment />
      {/* < Footer Logo={logo} /> */}
    </div>
  );
};

export default App;
