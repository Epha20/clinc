import React, { useEffect, useState } from "react";
import Tables from "../../utils/tables";
import axios from "axios";
const ShowListOfWaiting = () => {
  const [waitingUsers, setWaitingUsers] = useState({});
  useEffect(async () => {
    await axios
      .post("http://localhost:9000/clinic/test-waiting-paitients")
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
        <h1 style={{ textAlign: "center" }}>Waiting Paitients</h1>
        {waitingUsers.length != 0 ? (
          <Tables waitingUsers={waitingUsers} path={"/receivetestform"} />
        ) : null}
      </div>
    </div>
  );
};

export default ShowListOfWaiting;
