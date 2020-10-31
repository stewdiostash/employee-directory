import React from "react";

const TableRow = ({ employees }) => {
  console.log({ employees });
  return (
    <tbody>
      {employees[0] !== undefined && employees[0].name !== undefined ? (
        employees.map(({ name, picture, phone, email, dob, login }) => {
          return (
            <tr key={login.uuid} className="is-vcentered">
              <td>
                <img
                  src={picture.thumbnail}
                  alt={`${name.first} ${name.last}`}
                />
              </td>
              <td>
                {name.first} {name.last}
              </td>
              <td>{phone}</td>
              <td>{email}</td>
              <td>{dob.date.substr(0, 10)}</td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
};

export default TableRow;
