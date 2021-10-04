import React from "react";
import "../styles/textfield.css";
export default function Textfiled(props) {
  return (
    <div className="textfiledone">
      <div className="labels">{props.label}</div>
      <div className="txtfield">
        <input
          type={props.type}
          name={props.name}
          id=""
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.handleChange(e)}
        />
      </div>
    </div>
  );
}
