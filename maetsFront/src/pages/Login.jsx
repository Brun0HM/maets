import React from "react";

const Login = (props) => {
  return (
    <>
      <div className="Centro d-flex justify-content-center align-items-center">
        <div className="Login d-flex flex-column align-items-center rounded-3 justify-content-center">
          <div className="container d-flex justify-content-between mt-2 p-5 pb-4 pt-4 ">
            <img src={props.logo} alt="" />
            <p>x</p>
          </div>
          <div className="labelo d-flex flex-column w-100 p-5 pt-0 pb-4 ">
            <div className="d-flex flex-column">
              <label htmlFor="">NAME</label>
              <input
                className="Info mt-1 rounded-1"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="d-flex flex-column mt-4">
              <label htmlFor="">PASSWORD</label>
              <input
                className="Info mt-1 rounded-1"
                type="text"
                name=""
                id=""
              />
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
          <button className="SignIn mt-3  mb-2 btn btn-primary rounded-1 border-0">
            Sign In
          </button>
          <div className="footinho d-flex container justify-content-between p-4 pb-0 pt-5 ">
            <p role="button">
              {" "}
              <ins> Help, I can´t sign in </ins>{" "}
            </p>
            <p role="button">
              {" "}
              <ins>Don’t have a MAETS account? Create a Free Account</ins>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
