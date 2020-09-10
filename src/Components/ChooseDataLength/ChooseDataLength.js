import React, { useState } from "react";
import Button from "../Button";
import "./ChooseDataLength.scss";

const ChooseDataLength = ({ fetchData }) => {
  const [selected, setSelected] = useState("");

  const handleSelectChange = e => {
    setSelected(e.target.value);
  };

  const handleSelectSubmit = e => {
    e.preventDefault();
    const rows = selected === "32 строки" || selected === "" ? 32 : 1000;
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://www.filltext.com/?rows=${rows}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    );
  };

  return (
    <form className="formSelect" onSubmit={handleSelectSubmit}>
      <label className="formSelect__select">
        Выберите объем данных для таблицы:
        <select value={selected} onChange={handleSelectChange}>
          <option value="32 строки">32 строки</option>
          <option value="1000 строк">1000 строк</option>
        </select>
      </label>
      <Button>Подтвердить</Button>
    </form>
  );
};

export default ChooseDataLength;
