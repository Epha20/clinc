import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidenavstyles.css";
import store from "./statemngmt/store";
import { io } from "socket.io-client";
const socket = io.connect("http://localhost:9000");
const SideNav = ({ doctorRoute }) => {
  // socket.emit("message", { message: "hello there" });
  socket.on("paitient", ({ msg }) => {
    alert(msg);
  });
  console.log(store);
  const [notification, setNotification] = useState({});
  return (
    <div className="nav">
      <ul>
        {doctorRoute.map((el) => {
          return !el.label ? null : (
            <li
              key={el.label}
              onClick={(e) => {
                el.action &&
                  store.dispatch({
                    type: el.action,
                    payload: { number: 1 },
                  });
                var temp = { ...notification };
                temp[el.action] = store.getState()["data"][el.action];
                setNotification({ ...temp });
                console.log("store state:", temp);
              }}
            >
              <NavLink
                className="mylink"
                activeClassName="activeLink"
                to={el.path}
              >
                {el.label}{" "}
                {!el.action ? null : (
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "red",
                      width: "30px",
                      height: "30px",
                      color: "#fff",
                      borderRadius: "50%",
                      fontWeight: "bold",
                    }}
                  >
                    {store.getState()["data"][el.action]}
                  </span>
                )}{" "}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
