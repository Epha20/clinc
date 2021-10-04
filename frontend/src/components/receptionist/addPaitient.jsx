import React, { useState } from "react";
import Textfiled from "../../utils/textfiled";
import Buttons from "../../utils/buttons";
import axios from "axios";
export default function AddPaitient() {
  const [current, setCurrent] = useState("male");
  const [user, setUser] = useState("doctor");
  const [userdata, setUserData] = useState({});
  const [id, setId] = useState("");
  const handleChange = (e) => {
    const temp = userdata;
    userdata["sex"] = current;
    userdata[e.currentTarget.name] = e.currentTarget.value;
    // setUserData(temp);
    console.log(userdata);
  };
  const handleSubmit = () => {
    console.log(userdata.sex);

    axios
      .post("http://localhost:9000/clinic/register", { ...userdata })
      .then((response) => {
        setId(response.data._id);
        console.log(response);
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <div className="testform">
      <h3>Add Paitient</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "space-between",
          columnGap: "40px",
          width: "80%",
        }}
      >
        <Textfiled
          type="text"
          placeholder="First name"
          label="First name"
          name="firstName"
          handleChange={handleChange}
        />
        <Textfiled
          type="text"
          placeholder="Last name"
          label="Last name"
          name="lastName"
          handleChange={handleChange}
        />
        <Textfiled
          type="tel"
          placeholder=" phone"
          label="phone"
          name="phone"
          handleChange={handleChange}
        />
        <Textfiled
          type="text"
          placeholder="Address"
          label="Address"
          name="address"
          handleChange={handleChange}
        />
        <Textfiled
          type="Number"
          placeholder="Age"
          label="Age"
          name="Age"
          handleChange={handleChange}
        />
        <Textfiled
          type="date"
          placeholder="Birth date"
          label="Birth date"
          name="birthDate"
          handleChange={handleChange}
        />
        <Textfiled
          type="date"
          placeholder="Registration date"
          label="Registration date"
          name="registrationDate"
          handleChange={handleChange}
        />
        <div
          className="menu"
          style={{
            display: "block",
            margin: "10px",
            padding: "10px",
          }}
        >
          <div style={{ fontWeight: "600", fontSize: "18px" }}>Gender</div>
          <select
            style={{
              display: "block",
              margin: "5px",
              padding: "5px",
              outline: "none",
              border: " 2px solid rgba(100, 100, 100, 0.3)",
              fontSize: "18px",
            }}
            value={current}
            defaultValue={current}
            onChange={(e) => {
              console.log("changed", e.target.value);
              // userdata["sex"] = e.target.value;
              setUserData({ ...userdata, sex: e.target.value });
              setCurrent(e.target.value);
            }}
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        {/* /////////////////////////////////////////// */}
      </div>
      <span>{id}</span>
      <Buttons btntxt="register" handleroute={handleSubmit} />
    </div>
  );
}
