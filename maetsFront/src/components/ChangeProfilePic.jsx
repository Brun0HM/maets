import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

const ChangeProfilePic = (props) => {
  const navigate = useNavigate();
  const [foto, setFoto] = useState("");

  // Carrega a imagem salva no localStorage (se houver)
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("devlogin"));
    if (savedData && savedData.foto) {
      setFoto(savedData.foto);  // Exibe a foto salva, se existir
    }
  }, []);

  // Quando a imagem é selecionada
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result); // Atualiza o estado com a imagem base64

        // Salva a foto no localStorage
        const storedData = JSON.parse(localStorage.getItem('devlogin')) || {};
        localStorage.setItem('devlogin', JSON.stringify({
          ...storedData,  // Mantém outros dados
          foto: reader.result  // Salva a foto no localStorage
        }));
      };
      reader.readAsDataURL(file);  // Lê a imagem como base64
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (foto) {
      navigate("/");  // Navega para a página inicial (ou para onde você precisar)
    }
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <form onSubmit={handleSave}>
        <div>
          <img 
            className="rounded-3 rounded-bottom-0 img-fluid profileSizeChange" 
            src={foto || props.foto}  // Se não houver foto, usa a foto padrão
            alt="Profile"
          />
        </div>

        <div className='w-100 text-center'>
          <input 
            type="file" 
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            className="d-none"  // ou: style={{ display: 'none' }}
          />
          
          <label 
            htmlFor="fileInput" 
            className="form-control btn btnCor text-light border-0 py-2 px-4 rounded-2 rounded-top-0 w-100 w-md-auto"
            style={{ cursor: 'pointer' }}
          >
            Change
          </label>
        </div>
      </form>
    </div>
  );
}

export default ChangeProfilePic;