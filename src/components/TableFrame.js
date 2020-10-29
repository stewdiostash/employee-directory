import React, { Component } from "react";
import Searchbar from "./Searchbar";
// import TableRow from "./TableRow";
import API from "../utils/API";
// import axios from "axios";

class TableFrame extends Component {
  state = {
    employees: [{}],
    filteredEmployees: [{}],
  };

  // getEmployees = () => {
  //   API.search().then((res) => this.setState({ employees: res.data }));
  //   console.log({ employees: res.data });
  // };

  componentDidMount() {
    API.search().then((res) =>
      this.setState({
        employees: res.data,
        filteredEmployees: res.data,
      })
    );
  }

  handleFilter = (event) => {
    console.log(event.target.value);
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Searchbar handleFilter={this.handleFilter} />

        <div className=" columns is-centered my-5">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {/* {this.state.employees.map((employee) => (
              <TableRow
                employeeImage={employee.picture.thumbnail}
                employeeName={employee.name.first + employee.name.last}
                employeePhone={employee.phone}
                employeeEmail={employee.email}
                employeeDOB={employee.dob.date}
              />
            ))} */}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default TableFrame;
