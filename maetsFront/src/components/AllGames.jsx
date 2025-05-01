import React from "react";

const AllGames = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <img className="m-2 rounded-2 responsiva" src={props.Banner} alt="" />
    </div>
  );
};

export default AllGames;
