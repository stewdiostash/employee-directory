import React, { Component } from "react";
import Searchbar from "./Searchbar";
// import TableRow from "./TableRow";
import API from "../utils/API";
import TableRow from "./TableRow";
// import axios from "axios";

class TableFrame extends Component {
  state = {
    employees: [{}],
    filteredEmployees: [{}],
    isAscending: true,
  };

  componentDidMount() {
    API.search().then((res) =>
      this.setState({
        employees: res.data.results,
        filteredEmployees: res.data.results,
      })
    );
  }

  handleFilter = (event) => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.employees.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      // console.log(values);
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({
      filteredEmployees: filteredList,
    });
  };

  handleSort = () => {
    const compare = (a, b) => {
      if (this.state.isAscending) {
        if (a.name.first > b.name.first) return 1;
        if (a.name.first < b.name.first) return -1;
        return 0;
      } else {
        if (a.name.first < b.name.first) return 1;
        if (a.name.first > b.name.first) return -1;
        return 0;
      }
    };
    const ascendingOrder = this.state.employees.sort(compare);
    console.log(ascendingOrder);
    this.setState({
      isAscending: !this.state.isAscending,
      filteredEmployees: ascendingOrder,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Searchbar handleFilter={this.handleFilter} />

        <div className=" columns is-centered my-5">
          <table className="container table">
            <thead>
              <tr>
                <th>Image</th>
                <th onClick={this.handleSort}>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
            <TableRow employees={this.state.filteredEmployees} />
          </table>
        </div>
      </div>
    );
  }
}

export default TableFrame;
