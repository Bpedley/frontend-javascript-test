import React from "react";

const Loader = () => {
  const center = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };
  return <h1 style={center}>Идёт загрузка данных...</h1>;
};

export default Loader;
