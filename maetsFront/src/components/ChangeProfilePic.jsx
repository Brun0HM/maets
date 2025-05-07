import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

const ChangeProfilePic = (props) => {
  const navigate = useNavigate();
  const [foto, setFoto] = useState("");

  // Carrega a imagem salva no localStorage (se houver)
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("devlogin"));
    if (savedData && savedData.foto) {
      setFoto(savedData.foto);
    }
  }, []);

  // Quando a imagem é selecionada
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result); // base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (foto) {
      localStorage.setItem("devlogin", JSON.stringify({ foto }));
      navigate("/");
    }
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <form onSubmit={handleSave}>
        <div>
          <img 
            className="rounded-3 rounded-bottom-0 img-fluid profileSizeChange" 
            src={foto || props.foto} 
            alt="Profile"
          />
        </div>

        <div className='w-100 text-center'>

  <input 
    type="file" 
    id="fileInput"
    accept="image/*"
    onChange={handleImageChange}
    className="d-none" // ou: style={{ display: 'none' }}
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
