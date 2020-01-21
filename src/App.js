import React, { Component } from "react";
import ReactTable from "react-table-v6";
import columns from "./assets/columns";
import SelectedRow from "./Components/SelectedRow/SelectedRow";
import ChooseDataLength from "./Components/ChooseDataLength/ChooseDataLength";
import AddDataRow from "./Components/AddDataRow/AddDataRow";
import "react-table-v6/react-table.css";
import "./App.scss";

class App extends Component {
  state = {
    data: [],
    filteredData: [],
    selected: [],
    searchInput: "",
    currentSelect: "32 строки",
    isLoading: false
  };

  fetchData = url => {
    this.setState({ isLoading: true });
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data,
          filteredData: data,
          isLoading: false
        });
      });
  };

  handleFilterChange = e => {
    const targetValue =
      e === undefined ? this.state.searchInput : e.target.value;
    this.setState({ searchInput: targetValue }, () => {
      this.globalSearch();
    });
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
    this.fetchData(url);
  };

  selectRow = (state, rowInfo) => {
    return {
      onClick: () => {
        if (rowInfo.row._original.email === this.state.selected.email) {
          this.setState({
            selected: []
          });
        } else {
          this.setState({
            selected: rowInfo.row._original
          });
        }
      }
    };
  };

  globalSearch = () => {
    let { searchInput, data } = this.state;
    let filteredData = data.filter(value => {
      return (
        value.id.toString().includes(searchInput) ||
        value.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.email.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.phone
          .match(/\d+/g)
          .join("")
          .includes(searchInput)
      );
    });
    this.setState({ filteredData });
  };

  addRowData = data => {
    const newData = [data, ...this.state.data];
    this.setState({
      data: newData
    });
    this.handleFilterChange();
  };

  render() {
    let { searchInput, filteredData, data, isLoading } = this.state;

    if (isLoading) {
      return <h1 className="loader">Идёт загрузка данных...</h1>;
    }

    if (!data.length) {
      return (
        <ChooseDataLength
          handleSelectSubmit={this.handleSelectSubmit}
          handleSelectChange={this.handleSelectChange}
          currentSelect={this.state.currentSelect}
        />
      );
    }

    return (
      <>
        <input
          className="search"
          value={searchInput}
          onChange={this.handleFilterChange}
          placeholder="Найти"
        />
        <AddDataRow addRowData={this.addRowData} />
        <ReactTable
          data={filteredData}
          columns={columns}
          defaultPageSize={10}
          pageSizeOptions={[10, 25, 50]}
          className="-striped -highlight"
          getTrProps={this.selectRow}
          defaultSorted={[{ id: "id", desc: false }]}
        />
        {this.state.selected.email ? (
          <SelectedRow data={this.state.selected} />
        ) : null}
      </>
    );
  }
}

export default App;
