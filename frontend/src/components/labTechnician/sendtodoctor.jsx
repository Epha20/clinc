import React, { useState } from "react";
import Textfiled from "../../utils/textfiled";
import Buttons from "../../utils/buttons";
import SendTodoctorCard from "./../../utils/sendTodoctorCard";
import axios from "axios";
export default function Sendtodoctor(props) {
  const [testFrom, setTestForm] = useState({
    hematology: {
      WBC: " ",
      LYM: " ",
      MON: " ",
      GRA: " ",
      LYMP: " ",
      MONP: " ",
      GRAP: " ",
      RBC: " ",
      HGB: " ",
      HCT: " ",
      MCV: " ",
      MCH: " ",
      MCHC: " ",
      RDWc: " ",
      PLT: " ",
      PCT: " ",
      MPV: " ",
      PDWc: " ",
      PMLCC: " ",
      PMLCR: " ",
      Lyse: " ",
      PrVW: " ",
      PRvr: " ",
      BG: " ",
      BF: " ",
    },
    urine: {
      color: " ",
      PH___SG: " ",
      protein: " ",
      glucose: " ",
      ketone: " ",
      bilrubin: " ",
      uroblin: " ",
      blood: " ",
      Leukocyte: " ",
      Microscopi: " ",
      "WBCs___/HPF": " ",
      "RBCs___/HPF": " ",
      Casts: " ",
      Crystals: " ",
      Bacteria: " ",
      others: " ",
      "HCG Test": " ",
    },
    seriology: {
      VDRI: " ",
      H: " ",
      "Widal: o": " ",

      "Weil flex: ox 19": " ",
      "HBs AG": " ",
      CRP: " ",
      ASo: " ",
      "RH factor": " ",
      H_pylori: " ",
      PIHCT: " ",
      Bacteriology: " ",
      consistency: " ",
      KOH: " ",
      "Wet mount": " ",
      "Gram Stain": " ",
      AFB: " ",
      "Uric Acid": " ",
      T_protein: " ",
    },
    chemistry: {
      SGOT: " ",
      SGPT: " ",
      Bil_direct: " ",
      "Bil Total": " ",
      "Boon/UREA": " ",
      Creatining: " ",
      Trig: " ",
      "total Chol": " ",
      HDLMc: " ",
      LDlMc: " ",
    },
    paristology: {
      "stool Exam": " ",
      consistency: " ",
      "Direct Micro": " ",
      concentration: " ",
      OccultBlood: " ",
    },
  });
  const handleChange = (e) => {
    console.log(e.currentTarget.name);
    var name = e.currentTarget.name.replace(/-/g, "M");
    console.log("name1", name);
    name = name.replace(/%/g, "P");
    name = name.replace(/\./g, "_");
    console.log("catagory", e.currentTarget.dataset.catagory);
    console.log("replacing", name, e.currentTarget.value);
    // const temp = testFrom;
    testFrom[e.target.dataset.catagory][name] = e.currentTarget.value;
    // setTestForm(temp);
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
    axios
      .post("http://localhost:9000/clinic/send-to-labresult", {
        ...testFrom,
        id: props.location.state.waitingUser._id,
        userId: props.location.state.waitingUser.userId,
        testDate: props.location.state.waitingUser.test.testDate,
        doctor: props.location.state.waitingUser.doctor,
        age: props.location.state.waitingUser.test.age,
        sex: props.location.state.waitingUser.test.sex,
        reportDate: today,
        doctor: props.location.state.waitingUser.test.doctor,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        alert(e);
      });
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
      title: "Paristology",
      sub: [
        {
          1: ["stool Exam", "consistency", "Direct Micro"],
          2: ["concentration", "OccultBlood"],
        },
      ],
    },
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
  console.log(props.location.state.waitingUser);
  return (
    <div className="testform">
      <h3>write test result</h3>
      <div style={personalStyle}>
        <span>
          FirstName:{props.location.state.waitingUser.firstName}
          {"-"}
          {props.location.state.waitingUser.lastName}
        </span>
        <span>Sex:{props.location.state.waitingUser.test.sex}</span>
        <span>
          Age: y-{props.location.state.waitingUser.test.age.year} m-
          {props.location.state.waitingUser.test.age.month}
        </span>
        {/* <span>Address: Alamata</span> */}
        <span>PID: {props.location.state.waitingUser._id}</span>
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
        <SendTodoctorCard
          visible={props.location.state.waitingUser.test.hematology}
          data={catagories.hematology}
          catagory={"hematology"}
          handleChange={handleChange}
        />
        <SendTodoctorCard
          data={catagories.seriology}
          visible={props.location.state.waitingUser.test.seriology}
          catagory={"seriology"}
          handleChange={handleChange}
        />
        <SendTodoctorCard
          data={catagories.parsitology}
          visible={props.location.state.waitingUser.test.paristology}
          catagory={"paristology"}
          handleChange={handleChange}
        />
        <SendTodoctorCard
          data={catagories.urine}
          visible={props.location.state.waitingUser.test.urine}
          catagory={"urine"}
          handleChange={handleChange}
        />
        <SendTodoctorCard
          data={catagories.chemistry}
          visible={props.location.state.waitingUser.test.chemistry}
          catagory={"chemistry"}
          handleChange={handleChange}
        />
      </div>

      <Buttons btntxt="register" handleroute={handleSubmit} />
    </div>
  );
}
