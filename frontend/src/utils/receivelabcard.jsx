import React from "react";

export default function Receivelabcard(props) {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      style={{
        width: "450px",
        margin: "10px",
        background: "rgba(255,255,255,0.4)",
      }}
    >
      <h4>{props.title}</h4>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          width: "450px",

          //   justifyContent: "space-around",
        }}
      >
        {Object.keys(props.data).map((el) => {
          console.log(props.data[el]);
          return !props.data[el] ? null : (
            <div
              style={{
                width: "125px",
                margin: "10px",
                display: "flex",
                // justifyContent: "space-around",

                // flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  width: "30px",
                  height: "30px",
                  background: "green",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: "1.2em" }}>{el}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
