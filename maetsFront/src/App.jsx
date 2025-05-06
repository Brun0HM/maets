import React from "react";
import Profile from "./pages/Profile";
<<<<<<< HEAD
<<<<<<< HEAD
import Header from "./components/Header";
import logo from "./assets/logo.png";
import profile from "./assets/Profile.png";
=======
// import logo from "./assets/logo.png";
import Home from "./pages/Home";
>>>>>>> main
=======
import logo from "./assets/logo.png";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
>>>>>>> main

const App = () => {
  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <Header Logo={logo} Profile={profile}/>
=======
      {/* <Profile Logo={logo} /> */}
      <Home />
>>>>>>> main
=======
      {/* <Profile Logo={logo} />
      <Home /> */}
      <Cart />
>>>>>>> main
    </div>
  );
};

export default App;
