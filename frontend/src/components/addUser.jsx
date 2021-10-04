import React, { useState } from "react";
import Textfiled from "../utils/textfiled";
import Buttons from "../utils/buttons";
import axios from "axios";
export default function AddUser() {
  const [current, setCurrent] = useState("male");
  const [user, setUser] = useState("doctor");
  const [userdata, setUserData] = useState({});
  const handleChange = (e) => {
    const temp = userdata;
    userdata[e.currentTarget.name] = e.currentTarget.value;
    // setUserData(temp);
    console.log(userdata);
  };
  const handleSubmit = () => {
    console.log(userdata);

    axios
      .post("http://localhost:9000/clinic/sign-up", { ...userdata })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <div className="testform">
      <h3>Add User</h3>
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
          type="email"
          placeholder="Email"
          label="Email"
          name="email"
          handleChange={handleChange}
        />
        <Textfiled
          type="password"
          placeholder="password"
          label="password"
          name="password"
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
              setCurrent(e.target.value);
              userdata["sex"] = e.target.value;
            }}
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        {/* /////////////////////////////////// */}
        <div
          className="menu"
          style={{
            display: "block",
            margin: "10px",
            padding: "10px",
          }}
        >
          <div style={{ fontWeight: "600", fontSize: "18px" }}>User</div>
          <select
            style={{
              display: "block",
              margin: "5px",
              padding: "5px",
              outline: "none",
              border: " 2px solid rgba(100, 100, 100, 0.3)",
              fontSize: "18px",
            }}
            value={user}
            defaultValue={user}
            onChange={(e) => {
              console.log("changed", e.target.value);
              setUser(e.target.value);
              userdata["role"] = e.target.value;
            }}
          >
            <option value="doctor">Doctor</option>
            <option value="labtecnician">labTechnician</option>
            <option value="receptionist">receptionist</option>
          </select>
        </div>
        {/* //////////////////////////////// */}
      </div>

      <Buttons btntxt="register" handleroute={handleSubmit} />
    </div>
  );
}
