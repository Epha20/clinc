import React from "react";
import Catagorycard from "./catagorycard";

export default function Labcard({ data, handleChange, catagory }) {
  // console.log(catagory);
  const labcardStyle = {
    background: "rgba(255,255,255,0.4)",
    margin: "10px",
  };
  const test = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div style={labcardStyle}>
      <h4>{data.title}</h4>
      <h5>{data.subtitle}</h5>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          maxWidth: "600px",
        }}
      >
        {data.sub.map((el) => {
          return Object.keys(el).map((e) => {
            return el[e].map((t) => {
              return (
                <div
                  style={{
                    margin: "10px",
                    background: "rgba(255,255,255,0.6)",
                    padding: "10px",
                  }}
                >
                  {/* <Catagorycard /> */}
                  <Catagorycard
                    data={t}
                    handleChange={handleChange}
                    catagory={catagory}
                  />
                </div>
              );
            });
          });
        })}
        {/* ////////////////////////////////////// */}
      </div>
      {/* <div
        style={{
          display: "flex",
          flexFlow: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row",
          }}
        >
          <div
            style={{
              margin: "10px",
              background: "rgba(255,255,255,0.6)",
              padding: "10px",
            }}
          >
            <Catagorycard />
            <Catagorycard />
            <Catagorycard />
          </div>
          <div
            style={{
              margin: "10px",
              background: "rgba(255,255,255,0.6)",
              padding: "10px",
            }}
          >
            <Catagorycard />
            <Catagorycard />
            <Catagorycard />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row",
          }}
        >
          <div
            style={{
              margin: "10px",
              background: "rgba(255,255,255,0.6)",
              padding: "10px",
            }}
          >
            <Catagorycard />
            <Catagorycard />
            <Catagorycard />
          </div>
          <div
            style={{
              margin: "10px",
              background: "rgba(255,255,255,0.6)",
              padding: "10px",
            }}
          >
            <Catagorycard />
            <Catagorycard />
            <Catagorycard />
          </div>
        </div>
        {/* ////////////////////////////////////// /}
      </div> */}
    </div>
  );
}
