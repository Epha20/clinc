import React, { useState } from "react";
import TextField from "../utils/inputfields";
import SubmitBtn from "../utils/submitbtn";
import "../styles/form.css";
import { useHistory } from "react-router-dom";
const Form = ({ handelsign, handleUser, handleChange }) => {
  const [current, setCurrent] = useState("doctor");

  // const history = useHistory();
  return (
    <div className="form">
      <div className="userselect">
        <div className="lang">
          <select
            name="language"
            id=""
            value={current}
            defaultValue={current}
            onChange={(e) => {
              console.log("changed", e.target.value);
              setCurrent(e.target.value);
              handleUser(e.target.value);
            }}
          >
            <option value="doctor">doctor</option>
            <option value="labtechnician">lab technician</option>
            <option value="receptionist">reception</option>
          </select>
        </div>
      </div>
      <TextField
        type="txt"
        placeholder="UserName"
        name="phone"
        handleChange={handleChange}
      />
      <TextField
        type="password"
        placeholder="password"
        name="password"
        handleChange={handleChange}
      />
      <SubmitBtn handelsign={handelsign} />
    </div>
  );
};

export default Form;
