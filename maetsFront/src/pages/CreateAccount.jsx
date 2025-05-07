import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Hook para navegação programática

  const validate = () => {
    const newErrors = {};

    // Validação do campo NAME
    if (formData.name.trim().length < 3 || formData.name.trim().length > 20) {
      newErrors.name = "Name must be between 3 and 20 characters.";
    }

    // Validação do campo EMAIL
    if (
      formData.email.trim().length < 5 ||
      formData.email.trim().length > 100
    ) {
      newErrors.email = "Email must be between 5 and 100 characters.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
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
      console.log("Form is valid:", formData);
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
          <div className="container d-flex justify-content-between mt-2 pb-4 pt-4 ">
            <img src={Logo} alt="" />

            <Link to="/">
              <i class="bi bi-x fs-1 footinho"></i>
            </Link>
          </div>
          <div className="labelo d-flex flex-column w-100 p-5 pt-0 pb-4 ">
            <div className="d-flex flex-column">
              <label htmlFor="name">NAME</label>
              <input
                className="form-control inputCredit border-0 text-light"
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

            <div className="d-flex mt-3 flex-column">
              <label htmlFor="email">EMAIL</label>
              <input
                className="form-control  inputCredit border-0 text-light"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                minLength="5"
                maxLength="100"
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            <div className="d-flex flex-column mt-3">
              <label htmlFor="password">PASSWORD</label>
              <input
                className="form-control  inputCredit border-0 text-light"
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
          <button
            type="submit"
            className="SignIn mt-3 mb-2 btn btn-primary rounded-1 border-0"
          >
            Create
          </button>
          <div className="footinho d-flex container justify-content-between pb-0 pt-5 ">
            <p role="button">
              <ins> Help, I can´t create account </ins>
            </p>
            <Link to="/login">
              <p role="button">
                <ins>You have a MAETS account? Log in your Account</ins>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
