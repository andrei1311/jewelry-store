import React from "react";
import Spinner from "../../assets/Misterious mist.gif";

export const Loader = () => {
  return (
    <div>
      <img src={Spinner} alt="Spinner" />

      <h1>Loading...</h1>
    </div>
  );
};
