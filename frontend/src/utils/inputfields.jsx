import React from "react";
import "../styles/inputstyle.css";
const TextField = ({ type, name, placeholder, handleChange }) => {
  console.log("name", placeholder);
  return (
    <div className="inputBox">
      <input
        type={type}
        name={name}
        id=""
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
export default TextField;
