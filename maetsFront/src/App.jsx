import React from "react";
import Profile from "./pages/Profile";
import logo from "./assets/logo.png";
import profile from "./assets/profile.png";
import FavGames from "./components/FavGames";
const App = () => {
  return (
    <div>
      <Profile Logo={logo} Profile={profile} />
      {/* <FavGames /> */}
    </div>
  );
};

export default App;
