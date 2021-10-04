import React, { useEffect, useState } from "react";
import Tables from "../utils/tables";
import axios from "axios";

export default function ListofLabResult() {
  const [waitingUsers, setWaitingUsers] = useState({});
  useEffect(async () => {
    await axios
      .post("http://localhost:9000/clinic/paitients-lab-result")
      .then((response) => {
        setWaitingUsers({ ...response.data });
        console.log("list of paitients:", waitingUsers);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <div className="contentCard">
        <h1 style={{ textAlign: "center" }}>Paitients Lab Result</h1>
        {waitingUsers.length != 0 ? (
          <Tables waitingUsers={waitingUsers} path={"/detail-lab-result"} />
        ) : null}
      </div>
    </div>
  );
}
