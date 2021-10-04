import React, { useState } from "react";
import Buttons from "../../utils/buttons";
import axios from "axios";

export default function Searchpaitient() {
  const [searchQuery, setSearchQuery] = useState({});
  const [paitientData, setPaitientData] = useState({});
  const [paitientdoctor, setPaitientDoctor] = useState("hayelom");
  const handleChange = (e) => {
    const temp = searchQuery;
    searchQuery[e.currentTarget.name] = e.currentTarget.value;
    // setUserData(temp);
    console.log(searchQuery);
  };
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:9000/clinic/searchpaitient", {
        ...searchQuery,
      })
      .then((response) => {
        console.log("from server:", response.data);
        setPaitientData({ ...response.data });
      })
      .catch((e) => {
        alert(e);
      });
  };
  const handleSendPaitient = (e) => {
    console.log("paitient data:", paitientData);
    axios
      .post("http://localhost:9000/clinic/send-to-doctor", {
        userId: paitientData._id,
        doctor: paitientdoctor,
        firstName: paitientData.firstName,
        lastName: paitientData.lastName,
        birthDate: paitientData.birthDate,
        sex: paitientData.sex,
      })
      .then((response) => {
        console.log("from server:", response.data);
        // setPaitientData({ ...response.data[0] });
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <div className="testform">
      <h1>search paitient</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "20px",
        }}
      >
        <div className="searchbox" style={{ marginBottom: "20px" }}>
          <form action="">
            <input type="text" placeholder="Paitient ID" />
            <i className="fa fa-search"></i>
          </form>
        </div>
        <div className="searchbox" style={{ marginBottom: "20px" }}>
          <form action="">
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <i className="fa fa-search"></i>
          </form>
        </div>
        {/* <div className="searchbox" style={{ marginBottom: "20px" }}>
          <form action="">
            <input type="text" placeholder="Last Name" />
            <i className="fa fa-search"></i>
          </form>
        </div> */}
        <h4>search using one of the above</h4>
        <Buttons btntxt="search" handleroute={handleSubmit} />
      </div>
      <div
        style={{
          background: "rgba(255,255,255,0.5)",
          width: "400px",
          height: "400px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          flexFlow: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            padding: "10px",
            textAlign: "end",
          }}
        >
          <div>Registration Date</div>
          <div style={{ paddingTop: "10px" }}>11/12/2021</div>
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>Full Name:</div>
          <div>
            {paitientData.firstName} {paitientData.lastName}
          </div>
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>Sex:</div>
          <div>{paitientData.sex}</div>
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <div>Age:</div>
          <div>{paitientData.Age}</div>
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <div>Phone:</div>
          <div>{paitientData.phone}</div>
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <div>Adress:</div>
          <div>{paitientData.address}</div>
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <div>Paitient ID:</div> <div>{paitientData._id}</div>
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "right",
            margin: "10px",
          }}
        >
          <div
            className="menu"
            style={{
              display: "block",
              margin: "10px",
              padding: "10px",
            }}
          >
            <div style={{ fontWeight: "600", fontSize: "18px" }}> Doctor</div>
            <select
              style={{
                display: "block",
                margin: "5px",
                padding: "5px",
                outline: "none",
                border: " 2px solid rgba(100, 100, 100, 0.3)",
                fontSize: "18px",
              }}
              value={paitientdoctor}
              // defaultValue={userData.sex}
              onChange={(e) => {
                console.log("changed", e.target.value);

                setPaitientDoctor(e.target.value);
              }}
            >
              <option value="hayelom">Hayelom</option>
              <option value="haile">Haile</option>
              <option value="hana">Hana</option>
            </select>
          </div>

          <Buttons btntxt="send" handleroute={handleSendPaitient} />
        </div>

        {/* <h3> there is no Paitient with the given Id</h3> */}
      </div>
    </div>
  );
}
