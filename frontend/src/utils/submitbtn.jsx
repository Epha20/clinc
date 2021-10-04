import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/inputstyle.css";
import "../styles/submitbtn.css";
const SubmitBtn = ({ handelsign }) => {
  const history = useHistory();
  return (
    <div class="inputBox">
      <input type="submit" value="Login" onClick={handelsign} />
    </div>
  );
};

export default SubmitBtn;
