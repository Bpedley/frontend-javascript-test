import React from "react";

const InputField = ({ id, value, pattern, desc, handleChange, type }) => {
  return (
    <>
      <label htmlFor={id}>Введите {desc}:</label>
      <input
        id={id}
        value={value}
        onChange={handleChange}
        type={type}
        pattern={pattern}
      ></input>
    </>
  );
};

export default InputField;
