import React, { useState } from "react";
import Textfiled from "../utils/textfiled";
import Buttons from "../utils/buttons";
export default function EditProfile() {
  const [current, setCurrent] = useState("male");
  const [user, setUser] = useState("doctor");
  return (
    <div className="testform">
      <h3>Edit Profile</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "space-between",
          columnGap: "40px",
          width: "80%",
        }}
      >
        <Textfiled type="text" placeholder="First name" label="First name" />
        <Textfiled type="text" placeholder="Last name" label="Last name" />
        <Textfiled type="number" placeholder=" phone" label="phone" />
        <Textfiled type="text" placeholder="Address" label="Address" />
        <Textfiled type="email" placeholder="Email" label="Email" />
        <Textfiled type="password" placeholder="password" label="password" />
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
            }}
          >
            <option value="doctor">Doctor</option>
            <option value="labtecnician">labTechnician</option>
            <option value="receptionist">receptionist</option>
          </select>
        </div>
        {/* //////////////////////////////// */}
      </div>

      <Buttons btntxt="update" />
    </div>
  );
}
