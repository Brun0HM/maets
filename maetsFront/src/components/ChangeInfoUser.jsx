import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router";

const ChangeInfoUser = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("devlogin"));
    if (storedData) {
      setUserName(storedData.username);
      setEmail(storedData.email);
      setPassword(storedData.password);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && email) {
      localStorage.setItem("devlogin", JSON.stringify({ username, email, password }));

      navigate("/");
    }
  };

  return (
    <div className="w-100 d-flex flex-column align-items-center">

      <form onSubmit={handleLogin}>
        <div className='w-100 d-flex flex-column flex-md-row justify-content-center mb-4 gap-3'>
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="border-0 rounded-3 inputCredit text-light p-3 flex-fill"
            placeholder="Name"
            type="text"
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
  )
}

export default ChangeInfoUser;
