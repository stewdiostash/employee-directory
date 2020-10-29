import React, { Component } from "react";
import TableRow from "./TableRow";
// import API from "../utils/API";
import axios from "axios";

class TableFrame extends Component {
  state = {
    employees: [],
  };

  // getEmployees = () => {
  //   API.search().then((res) => this.setState({ employees: res.data }));
  //   console.log({ employees: res.data });
  // };

  componentDidMount() {
    this.getEmployees();
    console.log(this.state.employees);
  }

  getEmployees = () => {
    axios.get("https://randomuser.me/api/?results=50").then((response) => {
      this.setState({
        employees: response.data,
      });
    });
  };

  render() {
    return (
      <div className=" columns is-centered my-5">
        <table className="table">
          <thead>
            <td>Image</td>
            <td>Name</td>
            <td>Phone</td>
            <td>Email</td>
            <td>DOB</td>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <TableRow
                employeeImage={employee.picture.thumbnail}
                employeeName={employee.name.first + employee.name.last}
                employeePhone={employee.phone}
                employeeEmail={employee.email}
                employeeDOB={employee.dob.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableFrame;
