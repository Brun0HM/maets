import React from "react";
import { Link } from "react-router";
import { useState, useEffect } from "react";



const Perfil = (props) => {
  const [username, setUsername] = useState('');
  const [foto, setFoto] = useState('');

  useEffect(() => {
    // Recupera os dados do localStorage quando o componente for montado
    const storedData = JSON.parse(localStorage.getItem('devlogin'));
  
    if (storedData) {
      if (storedData.username) {
        setUsername(storedData.username);
      }
      if (storedData.foto) {
        setFoto(storedData.foto);
      }
    }
  }, []);

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center">
        <img className="rounded-3 m-3 profileSizeChange" src={foto} alt="" />
        <div className="profile d-flex flex-column justify-content-center">
          <h1 className="marginha fw-semibold"> {username || 'Guest'} </h1>
          <div className="d-flex">
            <Link to="/editProfile" className="text-decoration-none text-white">
              <p className="">Edit Profile</p>
            </Link>
            <i className="bi bi-caret-right-fill"></i>
          </div>
          <div className="text-dark d-flex align-items-center rounded-4 tamanho mb-2 level gap-2">
            <span className="m-2 border border-2 border-black rounded-circle quadrado">
              35
            </span>
            <span className="">Colector</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
