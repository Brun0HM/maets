import React from "react";
import Profile from "./pages/Profile";
import logo from "./assets/logo.png";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Profile Logo={logo} />
      <Home />
      <Cart />
    </div>
  );
};

export default App;
