import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const ChangeInfoUser = (props) => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [foto, setFoto] = useState("");

  // Carrega dados (incluindo foto) do localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('devlogin'));
    if (storedData) {
      setUserName(storedData.username || "");
      setEmail(storedData.email || "");
      setPassword(storedData.password || "");
      if (storedData.foto) {
        setFoto(storedData.foto);
      }
    }
  }, []);

  // Apenas seleciona a imagem, não salva até clicar em Save
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Salva todas as info e navega
  const handleSave = (e) => {
    e.preventDefault();
    if (username && email) {
      localStorage.setItem(
        'devlogin',
        JSON.stringify({ username, email, password, foto })
      );
      navigate('/');
    }
  };

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <form onSubmit={handleSave}>
        {/* Profile Picture Section */}
        <div className='mb-4 d-flex justify-content-center'>
                  
        <div className='d-flex flex-column align-items-center'>
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
              className="d-none"
              />
            <label
              htmlFor="fileInput"
              className="form-control btn btnCor text-light border-0 py-2 px-4 rounded-2 rounded-top-0 w-100 w-md-auto"
              style={{ cursor: 'pointer' }}
            >
              Change
            </label>
              </div>

          </div>
        </div>

        {/* User Info Section */}
        <div className='w-100 d-flex flex-column flex-md-row justify-content-center mb-4 gap-3'>
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="border-0 rounded-3 inputCredit text-light p-3 flex-fill"
            placeholder="Name"
            type="text"
            maxLength={20}
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-0 rounded-3 inputCredit text-light p-3 flex-fill"
            placeholder="Email"
            type="email"
          />
        </div>

        <div className='w-100 d-flex flex-column flex-md-row justify-content-center gap-3'>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-0 rounded-3 inputCredit text-light p-3 flex-fill"
            placeholder="Password"
            type="password"
          />
          <button className='btnCor rounded-3 text-light border-0 p-3 flex-fill'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeInfoUser;
