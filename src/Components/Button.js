import React from "react";

const Button = ({ children, toggleForm }) => {
  return (
    <button className="btn" onClick={toggleForm ? toggleForm : undefined}>
      {children}
    </button>
  );
};

export default Button;
