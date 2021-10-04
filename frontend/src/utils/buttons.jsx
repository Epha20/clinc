import React from "react";
import "../styles/buttons.css";
const Buttons = (props) => {
  return (
    <div className="btns" onClick={props.handleroute}>
      <span className="btntxt">{props.btntxt}</span>
    </div>
  );
};

export default Buttons;
