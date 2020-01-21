import React, { Component } from "react";
import "./AddDataRow.scss";

class AddDataRow extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    expand: false
  };

  handleRowAdd = () => {
    const { id, firstName, lastName, email, phone } = this.state;
    this.props.addRowData({ id, firstName, lastName, email, phone });
    this.setState({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      expand: false
    });
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  toggleForm = () => {
    this.setState({ expand: !this.state.expand });
  };

  render() {
    const { id, firstName, lastName, email, phone, expand } = this.state;

    if (!expand) {
      return (
        <button className="btn change-state" onClick={this.toggleForm}>
          Добавить
        </button>
      );
    }

    return (
      <>
        <button className="btn change-state" onClick={this.toggleForm}>
          Отменить
        </button>
        <button
          disabled={!id || !firstName || !lastName || !email || !phone}
          onClick={this.handleRowAdd}
          className="btn confirm"
        >
          Добавить
        </button>
        <div className="input-fields">
          <label htmlFor="id">Введите Id: </label>
          <input
            id="id"
            value={this.state.id}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="firstName">Введите имя: </label>
          <input
            id="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="lastName">Введите фамилию: </label>
          <input
            id="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="email">Введите email: </label>
          <input
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="phone">Введите номер телефона: </label>
          <input
            id="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          ></input>
        </div>
      </>
    );
  }
}

export default AddDataRow;
