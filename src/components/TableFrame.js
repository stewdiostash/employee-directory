import React, { Component } from "react";
import TableRow from "./TableRow";
import API from "../utils/API";

class TableFrame extends Component {
  state = {
    employees: {},
  };

  getEmployees = () => {
    API.search().then((res) => this.setState({ employees: res.data }));
  };

  render() {
    return (
      <div className=" columns is-centered my-5">
        <table className="table">
          <TableRow />
        </table>
      </div>
    );
  }
}

export default TableFrame;
