import "./App.css";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import logo from "./assets/Logo.png";
import Modal from "./components/Modal";
import logo from "./assets/logo.png";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Modal/>
      {/* <Profile Logo={logo} />
      <Home /> */}
      <Cart />
    </div>
  );
};

export default App;
