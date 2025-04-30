import React from "react";
import Profile from "./pages/Profile";
import logo from "./assets/logo.png";
import profile from "./assets/profile.png";
const App = () => {
  return (
    <div>
      <Profile Logo={logo} Profile={profile} />
    </div>
  );
};

export default App;
