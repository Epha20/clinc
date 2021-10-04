import React, { useState } from "react";
import Textfiled from "../../utils/textfiled";
import Buttons from "../../utils/buttons";

import axios from "axios";
export default function Editpaitient() {
  const [current, setCurrent] = useState("male");
  const [user, setUser] = useState("doctor");
  const [fname, setFname] = useState();
  const [userData, setUserData] = useState({});
  const [searchQuery, setSearchQuery] = useState({});
  const handleSearchChange = (e) => {
    const temp = searchQuery;
    searchQuery[e.currentTarget.name] = e.currentTarget.value;

    console.log(searchQuery);
  };

  const handleSearchSubmit = async (e) => {
    await axios
      .post("http://localhost:9000/clinic/searchpaitient", {
        ...searchQuery,
      })
      .then((response) => {
        if (response.data.notfound) {
          alert("notfound");
        } else {
          setUserData({ ...response.data });
          console.log("from server:", userData);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleSubmit = async (e) => {
    console.log(userData);
    await axios
      .post("http://localhost:9000/clinic/edit-paitient", {
        ...userData,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="testform">
      <h3>Edit paitient</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "20px",
        }}
      >
        <div className="searchbox" style={{ marginBottom: "20px" }}>
          <form action="">
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              onChange={(e) => {
                handleSearchChange(e);
              }}
            />
            <i className="fa fa-search"></i>
          </form>
        </div>

        <Buttons btntxt="search" handleroute={handleSearchSubmit} />
      </div>
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
          value={userData.firstName}
          handleChange={(e) => {
            setUserData({ ...userData, firstName: e.currentTarget.value });
          }}
        />
        <Textfiled
          type="text"
          placeholder="Last name"
          label="Last name"
          name="lastName"
          value={userData.lastName}
          handleChange={(e) => {
            setUserData({ ...userData, lastName: e.currentTarget.value });
          }}
        />
        <Textfiled
          type="tel"
          placeholder=" phone"
          label="phone"
          name="phone"
          value={userData.phone}
          handleChange={(e) => {
            setUserData({ ...userData, phone: e.currentTarget.value });
          }}
        />
        <Textfiled
          type="text"
          placeholder="Address"
          label="Address"
          name="address"
          value={userData.address}
          handleChange={(e) => {
            setUserData({ ...userData, address: e.currentTarget.value });
          }}
        />
        <Textfiled
          type="Number"
          placeholder="Age"
          label="Age"
          name="Age"
          value={userData.Age}
          handleChange={(e) => {
            setUserData({ ...userData, Age: e.currentTarget.value });
          }}
        />
        <Textfiled
          type="date"
          placeholder="Birth date"
          label="Birth date"
          name="birthDate"
          value={userData.birthDate}
          handleChange={(e) => {
            setUserData({ ...userData, birthDate: e.currentTarget.value });
          }}
        />
        <Textfiled
          type="date"
          placeholder="Registration date"
          label="Registration date"
          name="registrationDate"
          value={userData.registrationDate}
          handleChange={(e) => {
            setUserData({
              ...userData,
              registrationDate: e.currentTarget.value,
            });
          }}
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
            value={userData.sex}
            // defaultValue={userData.sex}
            onChange={(e) => {
              console.log("changed", e.target.value);
              // setCurrent(e.target.value);
              setUserData({
                ...userData,
                sex: e.target.value,
              });
            }}
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        {/* /////////////////////////////////////////// */}
      </div>

      <Buttons btntxt="save" handleroute={handleSubmit} />
    </div>
  );
}
