import React from "react";

const TableRow = ({ employees }) => {
  console.log({ employees });
  return (
    <tbody>
      {employees[0] !== undefined && employees[0].name !== undefined ? (
        employees.map(({ name, picture, phone, email, dob, login }) => {
          return (
            <tr key={login.uuid} className="tr">
              <td>
                <img
                  src={picture.thumbnail}
                  alt={`picture of ${name.first} ${name.last}`}
                />
              </td>
              <td>
                {name.first} {name.last}
              </td>
              <td>{phone}</td>
              <td>{email}</td>
              <td>{dob.date}</td>
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
