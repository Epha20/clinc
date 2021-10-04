import React from "react";
import Buttons from "../utils/buttons";
import { useHistory } from "react-router-dom";
export default function PaitientHistory(props) {
  console.log("from paitienthistory", props.location.state.waitingUser);
  const history = useHistory();
  const Styles = {
    width: "120px",
    minHeight: "30px",
    // background: "rgba(255,255,255,0.5)",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid lightgrey",
  };
  const personalStyle = {
    width: "80%",
    minHeight: "50px",
    // background: "rgba(255,255,255,0.3)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexFlow: "row",
    flexWrap: "wrap",
  };
  const cardStyle = {
    padding: "20px",
    background: "rgba(255,255,255,0.4)",
    margin: "8px",
  };
  const historyStyle = {
    background: "lightgrey",
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap",
    marginBottom: "10px",
  };
  const handleSubmit = (e) => {
    history.push({
      pathname: "/tesform",
      state: { waitingUser: props.location.state.waitingUser },
    });
  };
  const test = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="testform">
      <h2>patient history</h2>
      <div style={personalStyle}>
        <span>
          FirstName:{props.location.state.waitingUser.firstName}
          {"-"}
          {props.location.state.waitingUser.lastName}
        </span>
        <span>Sex:{props.location.state.waitingUser.sex}</span>
        <span>
          Age: y-{props.location.state.waitingUser.age.year} m-
          {props.location.state.waitingUser.age.month}
        </span>
        {/* <span>Address: Alamata</span> */}
        <span>PID: {props.location.state.waitingUser._id}</span>
      </div>

      <Buttons btntxt="send" handleroute={handleSubmit} />
      <div style={{ height: "550px", overflowY: "scroll" }}>
        <div style={historyStyle}>
          <div style={{ width: "90%" }}>
            {" "}
            <h3 style={{ textAlign: "end" }}>23/10/2021</h3>
          </div>
          {test.map((el) => {
            return (
              <div style={cardStyle}>
                {test.map((el) => {
                  return (
                    <div style={Styles}>
                      <span>Rdwc</span>
                      <span>13.2</span>
                      <span>%</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div style={historyStyle}>
          <div style={{ width: "90%" }}>
            {" "}
            <h3 style={{ textAlign: "end" }}>23/10/2021</h3>
          </div>
          {test.map((el) => {
            return (
              <div style={cardStyle}>
                {test.map((el) => {
                  return (
                    <div style={Styles}>
                      <span>Rdwc</span>
                      <span>13.2</span>
                      <span>%</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
