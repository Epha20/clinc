import React from "react";

export default function ReportCard({ data, title }) {
  return (
    <div
      className="reportcard"
      style={{
        background: "rgba(255,255,255,0.6)",
        width: "40%",
        margin: "20px",
      }}
    >
      <h3>{title}</h3>
      {Object.keys(data).map((el) => {
        return data[el] === " " ? null : (
          <div
            className="row"
            style={{
              textAlign: "center",
              //   width: "100%",
              marginLeft: "30%",
              marginRight: "20px",
              //   background: "green",
            }}
          >
            <div className="col1">{el}</div>
            <div className="col2">{data[el]}</div>
          </div>
        );
      })}
    </div>
  );
}
