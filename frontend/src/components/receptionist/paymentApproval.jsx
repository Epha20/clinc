import React, { useState, useEffect } from "react";
import PaymentTable from "./../../utils/paymentTable";
import axios from "axios";
export default function PaymentApproval() {
  const [waitingUsers, setWaitingUsers] = useState({});
  useEffect(async () => {
    await axios
      .post("http://localhost:9000/clinic/get-to-approval")
      .then((response) => {
        setWaitingUsers({ ...response.data });
        console.log("list of paitients:", waitingUsers);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  // /send-to-lab
  const handleSubmit = (index) => {
    console.log(waitingUsers[index]._id);
    axios
      .post("http://localhost:9000/clinic/send-to-lab", {
        id: waitingUsers[index]._id,
      })
      .then((response) => {
        delete waitingUsers[index];
        const temp = { ...waitingUsers };
        setWaitingUsers({ ...temp });
        console.log(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <div className="contentCard">
      <h1 style={{ textAlign: "center" }}>payment approval for lab test</h1>
      {waitingUsers.length != 0 ? (
        <PaymentTable waitingUsers={waitingUsers} handleSubmit={handleSubmit} />
      ) : null}
    </div>
  );
}
