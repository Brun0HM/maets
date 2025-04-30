import React from "react";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import logo from "./assets/logo.png";
import profile from "./assets/Profile.png";

const App = () => {
  return (
    <div>
      <Header Logo={logo} Profile={profile}/>
    </div>
  );
};

export default App;
