import React from "react";
import "../styles/catagorycard.css";

export default function Catagorycard({ data, handleChange, catagory }) {
  console.log(catagory);
  // const test = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={`row ${1 % 2 === 0 ? "even" : "odd"}`}>
      <div className="label">{data}</div>
      <div className="labelCheckbox">
        <input
          type="checkbox"
          data-catagory={catagory}
          name={data}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
}

// import React from "react";
// import "../styles/catagorycard.css";

// export default function Catagorycard({ data, handleChange }) {
//   // const test = [1, 2, 3, 4, 5, 6, 7];
//   return (
//     <div className=" catagorycard">
//       <h3>hematology</h3>
//       <div className="catagorycardcontent">
//         {data.map((el, index) => {
//           return (
//             <div className={`row ${index % 2 === 0 ? "even" : "odd"}`}>
//               <div className="label">{el}</div>
//               <div className="labelCheckbox">
//                 <input
//                   type="checkbox"
//                   name={el}
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
