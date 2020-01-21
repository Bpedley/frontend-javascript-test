import React from "react";
import "./ChooseDataLength.scss";

function ChooseDataLength({
  handleSelectSubmit,
  handleSelectChange,
  currentSelect
}) {
  return (
    <form onSubmit={handleSelectSubmit}>
      <label>
        Выберите объем данных для таблицы:
        <select value={currentSelect} onChange={handleSelectChange}>
          <option value="32 строки">32 строки</option>
          <option value="1000 строк">1000 строк</option>
        </select>
      </label>
      <input type="submit" value="Подтвердить" />
    </form>
  );
}

export default ChooseDataLength;
