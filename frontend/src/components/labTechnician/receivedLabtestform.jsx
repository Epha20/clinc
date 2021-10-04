import React from "react";

import Buttons from "../../utils/buttons";
import Receivelabcard from "../../utils/receivelabcard";

import { useHistory } from "react-router-dom";
const ReceivedLabtestform = (props) => {
  console.log(props.location.state.waitingUser);
  const { hematology, chemistry, seriology, urine, paristology } =
    props.location.state.waitingUser.test;
  console.log(hematology);
  console.log(paristology);
  const personalStyle = {
    width: "80%",
    minHeight: "50px",

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexFlow: "row",
    flexWrap: "wrap",
  };
  const history = useHistory();
  const handleroute = () => {
    history.push({
      pathname: "/sendlabresult",
      state: { waitingUser: props.location.state.waitingUser },
    });
  };

  return (
    <div className="testform">
      <h1> Test Form</h1>
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
      <div
        className="testformcontainer"
        style={{
          // display: "grid",
          // gridTemplateColumns: "480px 480px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          // overflowY: "scroll",
        }}
      >
        <Receivelabcard title={"Hematology"} data={hematology} />
        <Receivelabcard title={"Seriology"} data={seriology} />
        <Receivelabcard title={"Parisitology"} data={paristology} />{" "}
        <Receivelabcard title={"Urine"} data={urine} />
        <Receivelabcard title={"Chemistry"} data={chemistry} />
      </div>
      <div>
        <Buttons btntxt="send" handleroute={handleroute} />
      </div>
    </div>
  );
};

export default ReceivedLabtestform;
