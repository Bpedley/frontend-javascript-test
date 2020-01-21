import React, { Component } from "react";
import "./SelectedRow.scss";

class SelectedRow extends Component {
  state = {
    text: this.props.data.description
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data.description !== prevState.text) {
      return { text: nextProps.data.description || "" };
    } else return null;
  }

  render() {
    return (
      <div className="selected-row">
        <p>
          Выбран пользователь{" "}
          <b>{`${this.props.data.firstName} ${this.props.data.lastName}`}</b>
        </p>
        <p>Описание:</p>
        <textarea
          value={this.state.text}
          rows={30}
          onChange={e => this.setState({ text: e.target.value })}
        ></textarea>
        <p>
          Адрес проживания:{" "}
          <b>
            {this.props.data.address
              ? this.props.data.address.streetAddress
              : "Неизвестно"}
          </b>
        </p>
        <p>
          Город:{" "}
          <b>
            {this.props.data.address
              ? this.props.data.address.city
              : "Неизвестно"}
          </b>
        </p>
        <p>
          Провинция/штат:{" "}
          <b>
            {this.props.data.address
              ? this.props.data.address.state
              : "Неизвестно"}
          </b>
        </p>
        <p>
          Индекс:{" "}
          <b>
            {this.props.data.address
              ? this.props.data.address.zip
              : "Неизвестно"}
          </b>
        </p>
      </div>
    );
  }
}

export default SelectedRow;
