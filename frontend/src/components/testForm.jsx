import React, { useEffect, useState } from "react";
// import Textfiled from "../utils/textfiled";
import Catagorycard from "../utils/catagorycard";
import Buttons from "../utils/buttons";
import "../styles/testform.css";
import Labcard from "./../utils/labcard";
import axios from "axios";
const TestForm = (props) => {
  useEffect(() => {
    console.log("from doctor:", props.location.state.waitingUser);
  }, []);
  const [testFrom, setTestForm] = useState({
    hematology: {
      WBC: false,
      LYM: false,
      MON: false,
      GRA: false,
      LYMP: false,
      MONP: false,
      GRAP: false,
      RBC: false,
      HGB: false,
      HCT: false,
      MCV: false,
      MCH: false,
      MCHC: false,
      RDWc: false,
      PLT: false,
      PCT: false,
      MPV: false,
      PDWc: false,
      PMLCC: false,
      PMLCR: false,
      Lyse: false,
      PrVW: false,
      PRvr: false,
      BG: false,
      BF: false,
    },
    urine: {
      color: false,
      PH___SG: false,
      protein: false,
      glucose: false,
      ketone: false,
      bilrubin: false,
      uroblin: false,
      blood: false,
      Leukocyte: false,
      Microscopi: false,
      "WBCs___/HPF": false,
      "RBCs___/HPF": false,
      Casts: false,
      Crystals: false,
      Bacteria: false,
      others: false,
      "HCG Test": false,
    },
    seriology: {
      VDRI: false,
      H: false,
      "Widal: o": false,

      "Weil flex: ox 19": false,
      "HBs AG": false,
      CRP: false,
      ASo: false,
      "RH factor": false,
      H_pylori: false,
      PIHCT: false,
      Bacteriology: false,
      consistency: false,
      KOH: false,
      "Wet mount": false,
      "Gram Stain": false,
      AFB: false,
      "Uric Acid": false,
      T_protein: false,
    },
    chemistry: {
      SGOT: false,
      SGPT: false,
      Bil_direct: false,
      "Bil Total": false,
      "Boon/UREA": false,
      Creatining: false,
      Trig: false,
      "total Chol": false,
      HDLMc: false,
      LDlMc: false,
    },
    paristology: {
      "stool Exam": false,
      consistency: false,
      "Direct Micro": false,
      concentration: false,
      OccultBlood: false,
    },
  });
  const handleChange = (e) => {
    console.log(e.currentTarget.name);
    var name = e.currentTarget.name.replace(/-/g, "M");
    console.log("name1", name);
    name = name.replace(/%/g, "P");
    name = name.replace(/\./g, "_");
    console.log("name2", name);
    console.log("replacing", name, e.currentTarget.checked);
    const temp = testFrom;
    temp[e.target.dataset.catagory][name] = e.currentTarget.checked;
    setTestForm(temp);
    console.log("catagory", testFrom[e.target.dataset.catagory]);
  };
  const handleSubmit = () => {
    console.log("some body calls", testFrom);
    let today = new Date().toLocaleDateString();
    const day = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "Africa/Nairobi",
    });
    today = today + " " + day;
    console.log("today", today);
    axios
      .post("http://localhost:9000/clinic/send-to-approval", {
        ...testFrom,
        id: props.location.state.waitingUser._id,
        testDate: today,
        doctor: props.location.state.waitingUser.doctor,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        alert(e);
      });
  };
  const personalStyle = {
    width: "80%",
    minHeight: "50px",

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexFlow: "row",
    flexWrap: "wrap",
  };
  const catagories = {
    hematology: {
      title: "Hematology",
      subtitle: " CBC",
      sub: [
        {
          1: ["WBC", "LYM", "MON"],
          2: ["GRA", "LYM%", "MON%"],
          3: ["GRA%", "RBC", "HGB"],
          4: ["HCT", "MCV", "MCH"],
          5: ["MCHC", "RDWc", "PLT"],
          6: ["PCT", "MPV", "PDWc"],
          7: ["P-LCC", "P-LCR"],
          8: ["Lyse", "PrVW", "PRvr"],
          9: ["BG", "BF"],
        },
      ],
    },
    urine: {
      title: "URIN Analysis",
      sub: [
        {
          1: ["color", "PH...SG", "protein"],
          2: ["glucose", "ketone", "bilrubin"],
          3: ["uroblin", "blood", "Leukocyte"],
          4: ["Microscopi", "WBCs.../HPF"],
          5: ["RBCs.../HPF", "Casts", "Crystals"],
          6: ["Bacteria", "others", "HCG Test"],
        },
      ],
    },
    seriology: {
      title: "Serology",
      sub: [
        {
          1: ["VDRI", "Widal: o", "H"],
          2: ["Weil flex: ox 19", "HBs AG", "CRP"],
          3: ["ASo", "RH factor", "H.pylori"],
          4: ["PIHCT", "Bacteriology", "consistency"],
          5: ["KOH", "Wet mount", "Gram Stain"],
          6: ["AFB", "Uric Acid", "T.protein"],
        },
      ],
    },
    chemistry: {
      title: "Chemistry",
      sub: [
        {
          1: ["SGOT", "SGPT", "Bil.direct"],
          2: ["Bil Total", "Boon/UREA", "Creatining"],
          3: ["Trig", "total Chol", "HDL-c"],
          4: ["LDl-c"],
        },
      ],
    },
    parsitology: {
      title: "Parasitology",
      sub: [
        {
          1: ["stool Exam", "consistency", "Direct Micro"],
          2: ["concentration", "OccultBlood"],
        },
      ],
    },
  };
  return (
    <div className="testform">
      <h1> Test Form</h1>
      <div style={personalStyle}>
        <span>
          FirstName:{props.location.state.waitingUser.firstName}
          {"-"}
          {props.location.state.waitingUser.lastName}
        </span>
        <span>Sex:{props.location.state.waitingUser.sex}</span>
        <span>
          Age: y-{props.location.state.waitingUser.age.year} m-
          {props.location.state.waitingUser.age.month}
        </span>
        {/* <span>Address: Alamata</span> */}
        <span>PID: {props.location.state.waitingUser._id}</span>
      </div>

      <div
        className="testformcontainer"
        style={{
          // justifyContent: "space-between",
          height: "600px",
          overflowY: "scroll",
        }}
      >
        <Labcard
          data={catagories.hematology}
          catagory={"hematology"}
          handleChange={handleChange}
        />
        <Labcard
          data={catagories.urine}
          handleChange={handleChange}
          catagory={"urine"}
        />
        <Labcard
          data={catagories.seriology}
          handleChange={handleChange}
          catagory={"seriology"}
        />
        <Labcard
          data={catagories.chemistry}
          handleChange={handleChange}
          catagory={"chemistry"}
        />
        <Labcard
          data={catagories.parsitology}
          handleChange={handleChange}
          catagory={"paristology"}
        />
      </div>
      <div>
        <Buttons btntxt="send" handleroute={handleSubmit} />
      </div>
    </div>
  );
};

export default TestForm;
