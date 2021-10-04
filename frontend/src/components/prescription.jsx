import React, { useState } from "react";
import Buttons from "./../utils/buttons";
import axios from "axios";
export default function Prescription(props) {
  const personalStyle = {
    width: "80%",
    minHeight: "50px",

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexFlow: "row",
    flexWrap: "wrap",
  };

  const [prescrip, setPrescrip] = useState();
  const handleSubmit = () => {
    props.location.state.waitingUser.test.prescription = prescrip;
    console.log(props.location.state.waitingUser);
    axios
      .post("http://localhost:9000/clinic/add-paitient-history", {
        ...props.location.state.waitingUser,
      })
      .then((response) => {
        alert("done" + response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="testform">
      <h1>write prescription</h1>
      <div style={personalStyle}>
        <span>
          FirstName:{props.location.state.waitingUser.firstName}
          {"-"}
          {props.location.state.waitingUser.lastName}
        </span>
        <span>Sex:{props.location.state.waitingUser.test.sex}</span>
        <span>
          Age: y-{props.location.state.waitingUser.test.age.year} m-
          {props.location.state.waitingUser.test.age.month}
        </span>
        {/* <span>Address: Alamata</span> */}
        <span>PID: {props.location.state.waitingUser._id}</span>
      </div>

      <div className="contentCard">
        <textarea
          style={{
            padding: "10px",
            outline: "none",
            fontSize: "1.2em",
          }}
          name="prescription"
          id=""
          cols="80"
          rows="30"
          placeholder="write prescription"
          onChange={(e) => {
            setPrescrip(e.target.value);
          }}
        ></textarea>
        <Buttons btntxt="save" handleroute={handleSubmit} />
      </div>
    </div>
  );
}
