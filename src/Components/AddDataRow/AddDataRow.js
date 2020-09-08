import React, { useState } from "react";
import "./AddDataRow.scss";

const AddDataRow = ({ addRowData }) => {
  const [data, setData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    valid: false,
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
      [e.target.id]: e.target.value,
      valid: e.target.validity.valid
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
      <button className="btn change-state" onClick={toggleForm}>
        Добавить
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <button className="btn change-state" onClick={toggleForm}>
        Отменить
      </button>
      <button
        type="submit"
        className="btn confirm"
        disabled={
          !data.valid ||
          !data.id ||
          !data.firstName ||
          !data.lastName ||
          !data.phone ||
          !data.email
        }
      >
        Добавить
      </button>
      <div className="input-fields">
        <label htmlFor="id">Введите Id: </label>
        <input
          id="id"
          value={data.id}
          onChange={handleChange}
          type="number"
        ></input>
        <label htmlFor="firstName">Введите имя: </label>
        <input
          id="firstName"
          value={data.firstName}
          onChange={handleChange}
          type="text"
          pattern="[a-zA-Z]+"
        ></input>
        <label htmlFor="lastName">Введите фамилию: </label>
        <input
          id="lastName"
          value={data.lastName}
          onChange={handleChange}
          type="text"
          pattern="[a-zA-Z]+"
        ></input>
        <label htmlFor="email">Введите email: </label>
        <input
          id="email"
          value={data.email}
          onChange={handleChange}
          type="email"
          pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
        ></input>
        <label htmlFor="phone">Введите номер телефона: </label>
        <input
          id="phone"
          value={data.phone}
          onChange={handleChange}
          type="tel"
          pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
        ></input>
      </div>
    </form>
  );
};

export default AddDataRow;
