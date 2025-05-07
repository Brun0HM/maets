import React from "react";
import CardGame from "./CardGame";

const Carrocel = (props) => {
  return (
    <div className="container d-flex overflow-x-scroll scroller">
      <CardGame />
      <CardGame />
      <CardGame />
      <CardGame />
      <CardGame />
      <CardGame />
      <CardGame />
    </div>
  );
};

export default Carrocel;
