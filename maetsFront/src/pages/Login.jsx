import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate(); // Hook para navegação programática

  const validate = () => {
    const newErrors = {};

    // Validação do campo NAME
    if (formData.name.trim().length < 3 || formData.name.trim().length > 20) {
      newErrors.name = "Name must be between 3 and 20 characters.";
    }

    // Validação do campo PASSWORD
    if (
      formData.password.trim().length < 8 ||
      formData.password.trim().length > 20
    ) {
      newErrors.password = "Password must be between 8 and 20 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    if (validate()) {
      console.log("Login successful:", formData);
      navigate("/"); // Redireciona para a página inicial após validação bem-sucedida
    } else {
      console.log("Form has errors:", errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="Centro d-flex justify-content-center align-items-center ">
        <form
          className="Login d-flex flex-column align-items-center rounded-3 justify-content-center"
          onSubmit={handleSubmit}
        >
            <div className="container ps-3 pe-3 d-flex justify-content-between mt-2 pb-4 pt-4 ">
            <img src={Logo} alt="" />

            <Link to="/">
              <i class="bi bi-x fs-1 footinho"></i>
            </Link>
          </div>
          <div className="labelo d-flex flex-column w-100 p-5 pt-0 pb-4 ">
            <div className="d-flex flex-column">
              <label htmlFor="name">NAME</label>
              <input
                className="Info mt-1 inputCredit rounded-1"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                minLength="3"
                maxLength="20"
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>
            <div className="d-flex flex-column mt-4">
              <label htmlFor="password">PASSWORD</label>
              <input
                className="Info mt-1 inputCredit rounded-1"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                minLength="8"
                maxLength="20"
              />
              {errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>
            <div className="form-check mt-2 align-items-center">
              <input
                className="cheks form-check-input border-0"
                type="checkbox"
              />
              <label htmlFor="" className="Remember form-check-label fs-6">
                Remember me
              </label>
            </div>
          </div>
          <Link to="/">
            <button
              type="submit"
              className="SignIn mt-3 mb-2 btn btn-primary rounded-1 border-0"
            >
              Login
            </button>
          </Link>
          <div className="footinho d-flex container justify-content-between pb-0 pt-5 ">
            <p>
              <ins>Forgot your password?</ins>
            </p>
            <Link to="/CreateAccount">
              <p role="button" className="footinho">
                <ins>Don't have an account? Create one</ins>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
