import React from "react";
import "../App.css";

const Profile = (props) => {
  return (
    <div className="container">
      <img src={props.Logo} alt="" />
    </div>
  );
};

export default Profile;
