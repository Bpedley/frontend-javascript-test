import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import columns from "./assets/columns";
import SelectedRow from "./Components/SelectedRow/SelectedRow";
import ChooseDataLength from "./Components/ChooseDataLength/ChooseDataLength";
import AddDataRow from "./Components/AddDataRow/AddDataRow";
import SearchBar from "./Components/SearchBar";
import Loader from "./Components/Loader";
import "react-table-v6/react-table.css";
import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleFilterChange();
    globalSearch();
  }, [searchValue, data]); // eslint-disable-line

  const fetchData = url => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setFilteredData(data);
        setIsLoading(false);
      });
  };

  const handleFilterChange = e => {
    const targetValue = e === undefined ? searchValue : e.target.value;
    setSearchValue(targetValue);
  };

  const globalSearch = () => {
    let filteredData = data.filter(value => {
      return (
        value.id.toString().includes(searchValue) ||
        value.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        value.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
        value.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        value.phone.match(/\d+/g).join("").includes(searchValue)
      );
    });
    setFilteredData(filteredData);
  };

  const selectRow = (_, rowInfo) => {
    return {
      onClick: () => {
        if (rowInfo.row._original.email === selectedRow.email) {
          setSelectedRow([]);
        } else {
          setSelectedRow(rowInfo.row._original);
        }
      }
    };
  };

  const addRowData = rowData => {
    const newData = [rowData, ...data];
    setData(newData);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!data.length) {
    return <ChooseDataLength fetchData={fetchData} />;
  }

  return (
    <main>
      <SearchBar value={searchValue} handleFilterChange={handleFilterChange} />
      <AddDataRow addRowData={addRowData} />
      <ReactTable
        data={filteredData}
        columns={columns}
        defaultPageSize={10}
        pageSizeOptions={[10, 25, 50]}
        className="-striped -highlight"
        getTrProps={selectRow}
        defaultSorted={[{ id: "id", desc: false }]}
        pageText="Страница"
        rowsText="строк"
        previousText="Предыдущая"
        nextText="Следующая"
        noDataText="Строки не найдены"
      />
      {selectedRow.email ? <SelectedRow data={selectedRow} /> : null}
    </main>
  );
};

export default App;
