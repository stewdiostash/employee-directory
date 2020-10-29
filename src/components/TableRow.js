import React from "react";

const TableRow = (props) => {
  return (
    <tr className="tr">
      <td>{props.employeeImage}</td>
      <td>{props.employeeName}</td>
      <td>{props.employeePhone}</td>
      <td>{props.employeeEmail}</td>
      <td>{props.employeeDOB}</td>
    </tr>
  );
};

export default TableRow;
