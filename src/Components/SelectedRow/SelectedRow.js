import React, { useState, useEffect } from "react";
import "./SelectedRow.scss";

const SelectedRow = ({ data }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(data.description);
  }, [data]);

  const handleChange = e => {
    setDescription(e.target.value);
  };

  return (
    <div className="selected-row">
      <p>
        Выбран пользователь <b>{`${data.firstName} ${data.lastName}`}</b>
      </p>
      <p>Описание:</p>
      <textarea
        value={description}
        rows={30}
        onChange={handleChange}
      ></textarea>
      <p>
        Адрес проживания:{" "}
        <b>{data.address ? data.address.streetAddress : "Неизвестно"}</b>
      </p>
      <p>
        Город: <b>{data.address ? data.address.city : "Неизвестно"}</b>
      </p>
      <p>
        Провинция/штат:{" "}
        <b>{data.address ? data.address.state : "Неизвестно"}</b>
      </p>
      <p>
        Индекс: <b>{data.address ? data.address.zip : "Неизвестно"}</b>
      </p>
    </div>
  );
};

export default SelectedRow;
