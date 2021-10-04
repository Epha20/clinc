import React from "react";
import Textfiled from "./textfiled";

export default function SendTodoctorCard({
  data,
  handleChange,
  catagory,
  visible,
}) {
  const inputStyle = {
    padding: "4px",
    outline: "none",
    margin: "3px",
    // border: "none",
  };
  const cardStyle = {
    background: "darkgrey",
  };

  return (
    <div style={cardStyle}>
      <h4>{data.title}</h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.sub.map((el) => {
          return Object.keys(el).map((e) => {
            return el[e].map((t) => {
              console.log(String(visible[t]));
              return !visible[t] ? null : (
                <span
                  key={el[e][t]}
                  style={{
                    margin: "5px",
                    display: "flex",
                    width: "230px",
                    flexFlow: "column",
                    // background: "red",
                    // width: "40%",
                  }}
                >
                  <span>{t}</span>
                  <span>
                    <input
                      key={t}
                      style={inputStyle}
                      type="text"
                      name={t}
                      id={t}
                      placeholder={t}
                      data-catagory={catagory}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </span>
                </span>
              );
            });
          });
        })}
      </div>
    </div>
  );
}
