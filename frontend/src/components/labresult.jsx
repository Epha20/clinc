import React from "react";
import { useHistory } from "react-router-dom";
import ReportCard from "../utils/reportcard";
import Buttons from "./../utils/buttons";

const LabResult = (props) => {
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
      pathname: "/prescription",
      state: { waitingUser: props.location.state.waitingUser },
    });
  };
  console.log(props.location.state.waitingUser);
  return (
    <div className="testform">
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
      <div className="testformcontainer" style={{ textAlign: "center" }}>
        <ReportCard
          data={props.location.state.waitingUser.test.hematology}
          title={"Hematology"}
        />
        <ReportCard
          data={props.location.state.waitingUser.test.urine}
          title={"Urine"}
        />
        <ReportCard
          data={props.location.state.waitingUser.test.seriology}
          title={"Seriology"}
        />
        <ReportCard
          data={props.location.state.waitingUser.test.paristology}
          title={"Paristology"}
        />
        <ReportCard
          data={props.location.state.waitingUser.test.chemistry}
          title={"Chemistry"}
        />
        <Buttons btntxt="Prescription" handleroute={handleroute} />
      </div>
    </div>
  );
};

export default LabResult;
