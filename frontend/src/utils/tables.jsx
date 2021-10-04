import React from "react";
import "../styles/tables.css";
import { useHistory } from "react-router-dom";
export default function Tables({ waitingUsers, path }) {
  console.log("waiting users:", waitingUsers);
  const history = useHistory();
  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>status</th>
        </tr>
        {Object.keys(waitingUsers).map((index) => {
          return (
            <tr>
              <td>{waitingUsers[index]._id}</td>
              <td>{waitingUsers[index].firstName}</td>
              <td>{waitingUsers[index].lastName}</td>
              <td style={{ textAlign: "center" }}>
                <span
                  className="morebtn"
                  onClick={(e) => {
                    history.push({
                      pathname: path,
                      state: { waitingUser: waitingUsers[index] },
                    });
                  }}
                >
                  more
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
