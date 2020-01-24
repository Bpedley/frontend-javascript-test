import React, { Component } from "react";
import "./ChooseDataLength.scss";

class ChooseDataLength extends Component {
  state = {
    currentSelect: "32 строки"
  };

  handleSelectChange = e => {
    this.setState({ currentSelect: e.target.currentSelect });
  };

  handleSelectSubmit = e => {
    e.preventDefault();
    let url;
    if (this.state.currentSelect === "32 строки") {
      url =
        "https://cors-anywhere.herokuapp.com/http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
    } else {
      url =
        "https://cors-anywhere.herokuapp.com/http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
    }
    this.props.fetchData(url);
  };

  render() {
    return (
      <form onSubmit={this.handleSelectSubmit}>
        <label>
          Выберите объем данных для таблицы:
          <select
            value={this.state.currentSelect}
            onChange={this.handleSelectChange}
          >
            <option value="32 строки">32 строки</option>
            <option value="1000 строк">1000 строк</option>
          </select>
        </label>
        <input type="submit" value="Подтвердить" />
      </form>
    );
  }
}

export default ChooseDataLength;
