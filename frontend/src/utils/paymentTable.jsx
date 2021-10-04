import React from "react";

import "../styles/tables.css";
import { useHistory } from "react-router-dom";
export default function PaymentTable({ waitingUsers, handleSubmit }) {
  console.log("waiting users:", waitingUsers);
  const history = useHistory();
  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>total price(birr)</th>
          <th>approve</th>
        </tr>
        {Object.keys(waitingUsers).map((index) => {
          return (
            <tr>
              <td>{waitingUsers[index]._id}</td>
              <td>{waitingUsers[index].firstName}</td>
              <td>{waitingUsers[index].lastName}</td>
              <td>400 brr</td>
              <td style={{ textAlign: "center" }}>
                <span
                  className="morebtn"
                  onClick={(e) => {
                    handleSubmit(index);
                  }}
                >
                  Approve
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
