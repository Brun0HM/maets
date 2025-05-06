import React from "react";
import Profile from "./pages/Profile";
import logo from "./assets/logo.png";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* <Profile Logo={logo} />
      <Home /> */}
      {/* <Cart /> */}
      <Footer Logo={logo} />
    </div>
  );
};

export default App;
