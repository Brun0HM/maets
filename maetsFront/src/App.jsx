import React from "react";
import Header from "./components/Header";
import logo from "./assets/logo.png";
import profile from "./assets/Profile.png";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

const App = () => {
  return (
    <div>

      <Header Logo={logo} Profile={profile}/>
      {/* <Profile Logo={logo} />
      <Home /> */}
      <Payment />
    </div>
  );
};

export default App;
