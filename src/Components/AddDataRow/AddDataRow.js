import React, { useState } from "react";
import InputField from "./InputField";
import { formValidation, inputFields } from "../../utils";
import "./AddDataRow.scss";

const AddDataRow = ({ addRowData }) => {
  const [data, setData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    expand: false
  });

  const handleSubmit = e => {
    e.preventDefault();
    const { id, firstName, lastName, email, phone } = data;
    addRowData({ id, firstName, lastName, email, phone });
    setData({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      expand: false
    });
  };

  const handleChange = e => {
    setData({
      ...data,
      [e.target.id]: e.target.value
    });
  };

  const toggleForm = () => {
    setData({
      ...data,
      expand: !data.expand
    });
  };

  if (!data.expand) {
    return (
      <button className="btn" onClick={toggleForm}>
        Добавить
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <button className="btn" onClick={toggleForm}>
        Отменить
      </button>
      <button type="submit" className="btn" disabled={!formValidation(data)}>
        Добавить
      </button>
      <div className="input-fields">
        {inputFields.map((el, i) => (
          <InputField
            key={i}
            id={el.name}
            value={data[el.name]}
            handleChange={handleChange}
            type={el.type}
            pattern={el.pattern}
            desc={el.desc}
          />
        ))}
      </div>
    </form>
  );
};

export default AddDataRow;
