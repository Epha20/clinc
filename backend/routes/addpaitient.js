const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
app.use(express.json());
////////////////////////////////////////////////////////
const TestSchema = new mongoose.Schema({
  doctor: { type: String, required: true },
  prescription: { type: String },
  testDate: { type: String, required: true },
  age: {
    year: { type: Number },
    month: { type: Number },
  },
  sex: { type: String },
  reportDate: { type: String, required: true },
  hematology: {
    WBC: { type: String, required: true },
    LYM: { type: String, required: true },
    MON: { type: String, required: true },
    GRA: { type: String, required: true },
    LYMP: { type: String, required: true },
    MONP: { type: String, required: true },
    GRAP: { type: String, required: true },
    RBC: { type: String, required: true },
    HGB: { type: String, required: true },
    HCT: { type: String, required: true },
    MCV: { type: String, required: true },
    MCH: { type: String, required: true },
    MCHC: { type: String, required: true },
    RDWc: { type: String, required: true },
    PLT: { type: String, required: true },
    PCT: { type: String, required: true },
    MPV: { type: String, required: true },
    PDWc: { type: String, required: true },
    PMLCC: { type: String, required: true },
    PMLCR: { type: String, required: true },
    Lyse: { type: String, required: true },
    PrVW: { type: String, required: true },
    PRvr: { type: String, required: true },
    BG: { type: String, required: true },
    BF: { type: String, required: true },
  },
  urine: {
    color: { type: String, required: true },
    PH___SG: { type: String, required: true },
    protein: { type: String, required: true },
    glucose: { type: String, required: true },
    ketone: { type: String, required: true },
    bilrubin: { type: String, required: true },
    uroblin: { type: String, required: true },
    blood: { type: String, required: true },
    Leukocyte: { type: String, required: true },
    Microscopi: { type: String, required: true },
    "WBCs___/HPF": { type: String, required: true },
    "RBCs___/HPF": { type: String, required: true },
    Casts: { type: String, required: true },
    Crystals: { type: String, required: true },
    Bacteria: { type: String, required: true },
    others: { type: String, required: true },
    "HCG Test": { type: String, required: true },
  },
  seriology: {
    VDRI: { type: String, required: true },
    "Widal: o": { type: String, required: true },
    H: { type: String, required: true },
    "Weil flex: ox 19": { type: String, required: true },
    "HBs AG": { type: String, required: true },
    CRP: { type: String, required: true },
    ASo: { type: String, required: true },
    "RH factor": { type: String, required: true },
    H_pylori: { type: String, required: true },
    PIHCT: { type: String, required: true },
    Bacteriology: { type: String, required: true },
    consistency: { type: String, required: true },
    KOH: { type: String, required: true },
    "Wet mount": { type: String, required: true },
    "Gram Stain": { type: String, required: true },
    AFB: { type: String, required: true },
    "Uric Acid": { type: String, required: true },
    T_protein: { type: String, required: true },
  },
  chemistry: {
    SGOT: { type: String, required: true },
    SGPT: { type: String, required: true },
    Bil_direct: { type: String, required: true },
    "Bil Total": { type: String, required: true },
    "Boon/UREA": { type: String, required: true },
    Creatining: { type: String, required: true },
    Trig: { type: String, required: true },
    "total Chol": { type: String, required: true },
    HDLMc: { type: String, required: true },
    LDlMc: { type: String, required: true },
  },
  paristology: {
    "stool Exam": { type: String, required: true },
    consistency: { type: String, required: true },
    "Direct Micro": { type: String, required: true },
    concentration: { type: String, required: true },
    OccultBlood: { type: String, required: true },
  },
});

///////////////////////////////////////////////////////
const TestSchemabool = new mongoose.Schema({
  doctor: { type: String, required: true },
  testDate: { type: String },
  reportDate: { type: String },
  age: {
    year: { type: Number },
    month: { type: Number },
  },
  sex: { type: String },
  hematology: {
    WBC: { type: Boolean },
    LYM: { type: Boolean },
    MON: { type: Boolean },
    GRA: { type: Boolean },
    LYMP: { type: Boolean },
    MONP: { type: Boolean },
    GRAP: { type: Boolean },
    RBC: { type: Boolean },
    HGB: { type: Boolean },
    HCT: { type: Boolean },
    MCV: { type: Boolean },
    MCH: { type: Boolean },
    MCHC: { type: Boolean },
    RDWc: { type: Boolean },
    PLT: { type: Boolean },
    PCT: { type: Boolean },
    MPV: { type: Boolean },
    PDWc: { type: Boolean },
    PMLCC: { type: Boolean },
    PMLCR: { type: Boolean },
    Lyse: { type: Boolean },
    PrVW: { type: Boolean },
    PRvr: { type: Boolean },
    BG: { type: Boolean },
    BF: { type: Boolean },
  },
  urine: {
    color: { type: Boolean },
    PH___SG: { type: Boolean },
    protein: { type: Boolean },
    glucose: { type: Boolean },
    ketone: { type: Boolean },
    bilrubin: { type: Boolean },
    uroblin: { type: Boolean },
    blood: { type: Boolean },
    Leukocyte: { type: Boolean },
    Microscopi: { type: Boolean },
    "WBCs___/HPF": { type: Boolean },
    "RBCs___/HPF": { type: Boolean },
    Casts: { type: Boolean },
    Crystals: { type: Boolean },
    Bacteria: { type: Boolean },
    others: { type: Boolean },
    "HCG Test": { type: Boolean },
  },
  seriology: {
    VDRI: { type: Boolean },
    "H ": { type: Boolean },
    "Widal: o": { type: Boolean },
    "Weil flex: ox 19": { type: Boolean },
    "HBs AG": { type: Boolean },
    CRP: { type: Boolean },
    ASo: { type: Boolean },
    "RH factor": { type: Boolean },
    H_pylori: { type: Boolean },
    PIHCT: { type: Boolean },
    Bacteriology: { type: Boolean },
    consistency: { type: Boolean },
    KOH: { type: Boolean },
    "Wet mount": { type: Boolean },
    "Gram Stain": { type: Boolean },
    AFB: { type: Boolean },
    "Uric Acid": { type: Boolean },
    T_protein: { type: Boolean },
  },
  chemistry: {
    SGOT: { type: Boolean },
    SGPT: { type: Boolean },
    Bil_direct: { type: Boolean },
    "Bil Total": { type: Boolean },
    "Boon/UREA": { type: Boolean },
    Creatining: { type: Boolean },
    Trig: { type: Boolean },
    "total Chol": { type: Boolean },
    HDLMc: { type: Boolean },
    LDlMc: { type: Boolean },
  },
  paristology: {
    "stool Exam": { type: Boolean },
    consistency: { type: Boolean },
    "Direct Micro": { type: Boolean },
    concentration: { type: Boolean },
    OccultBlood: { type: Boolean },
  },
});
const LabResult = new mongoose.model(
  "LabResult",
  new mongoose.Schema({
    userId: { type: String },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    test: TestSchema,
  })
);
//////////////////////////////////////////////////////
const PaitientList = new mongoose.model(
  "PaitientList",
  new mongoose.Schema({
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      year: { type: Number },
      month: { type: Number },
    },
    sex: { type: String },
    doctor: { type: String, required: true },
  })
);
//////////////////////////////////////////////////////
const TestWaiting = new mongoose.model(
  "TestWaiting",
  new mongoose.Schema({
    userId: { type: String },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    test: TestSchemabool,
  })
);
//////////////////////////////////////////////////////
const ApprovalList = new mongoose.model(
  "ApprovalList",
  new mongoose.Schema({
    userId: { type: String },
    firstName: {
      type: String,
      required: true,
    },
    age: {
      year: { type: Number },
      month: { type: Number },
    },
    lastName: {
      type: String,
      required: true,
    },
    test: TestSchemabool,
  })
);
//////////////////////////////////////////////////////
const BirukPaitients = new mongoose.model(
  "BirukPaitients",
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
    },
    sex: {
      type: String,
    },
    birthDate: {
      type: String,
    },
    registrationDate: {
      type: String,
    },
    Age: {
      type: Number,
    },
    paitienthistory: [TestSchema],
  })
);
//////////////////////////////////////////////////
app.post("/register", async (req, res) => {
  console.log("sex is ", req.body.sex);
  const newPaitient = new BirukPaitients({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    address: req.body.address,
    sex: req.body.sex,
    birthDate: req.body.birthDate,
    registrationDate: req.body.registrationDate,
    Age: req.body.Age,
  });
  console.log(req.body.phone);
  //   console.location(product.phone);
  result = await newPaitient.save();
  res.send(result);
});
app.post("/edit-paitient", async (req, res) => {
  const paitient = await BirukPaitients.updateOne(
    { _id: req.body._id },
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        address: req.body.address,
        sex: req.body.sex,
        birthDate: req.body.birthDate,
        registrationDate: req.body.registrationDate,
        Age: req.body.Age,
      },
    }
  );
  console.log(req.body.phone);
  res.send(paitient);
});
////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/getpaitient", async (req, res) => {
  const load = await BirukPaitients.findById(req.body.id);
  res.send(load);
});
/////////////////////////////////////////////////////////////////////////////////////////////
app.post("/getpaitient-list", async (req, res) => {
  const load = await PaitientList.find();
  res.send(load);
});
/////////////////////////////////////////////////////////////////////////////////////////////
app.post("/searchpaitient", async (req, res) => {
  console.log(req.body.phone);
  var phone = req.body.phone.slice(-9);
  console.log(phone);
  const search = await BirukPaitients.findOne({
    phone: new RegExp(phone ? phone : null, "i"),
  });
  console.log(search);
  if (search != null) res.send(search);
  else {
    res.send({ notfound: true });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////
app.post("/add-paitient-history", async (req, res) => {
  // console.log(req.body.id);
  console.log(req.body.hematology);
  console.log("prescription", req.body);
  // const result = await LabResult.findByIdAndRemove({ id: req.body.id });
  const paitient = await BirukPaitients.findById(req.body.userId);
  paitient.paitienthistory.push({
    doctor: req.body.test.doctor,
    age: req.body.test.age,
    sex: req.body.test.sex,
    testDate: req.body.test.testDate,
    prescription: req.body.test.prescription,
    reportDate: req.body.test.reportDate,
    hematology: req.body.test.hematology,
    urine: req.body.test.urine,
    chemistry: req.body.test.chemistry,
    paristology: req.body.test.paristology,
    seriology: req.body.test.seriology,
  });
  const resul = await paitient.save();
  res.send(resul);
});
////////////////////////////////////////////////////////////////////////////////////////////////
// for turn
app.post("/send-to-doctor", async (req, res) => {
  console.log(req.body.birthDate);
  const paitient = new PaitientList({
    userId: req.body.userId,
    doctor: req.body.doctor,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    sex: req.body.sex,
    age: {
      year: calculateAge(req.body.birthDate).year,
      month: calculateAge(req.body.birthDate).month,
    },
  });
  const result = await paitient.save();
  console.log("adding paitient");
  const connection =
    require("../startingfolder/notification/notification").connection();
  connection.sendEvent("paitient", { msg: "new paitient arrived" });
  res.send(result);
});
////////////////////////////////////////////////////////////////////////////////////////////////
// for turn
app.post("/send-to-approval", async (req, res) => {
  const result = await PaitientList.findByIdAndRemove(req.body.id);
  if (result == null) {
    return res.send("failed to send to approval");
  } else {
    console.log(req.body.seriology.H_pylori);
    const paitient = new ApprovalList({
      userId: result.userId,
      firstName: result.firstName,
      lastName: result.lastName,
      test: {
        doctor: req.body.doctor,
        testDate: req.body.testDate,
        reportDate: req.body.reportDate,
        age: result.age,
        sex: result.sex,
        hematology: req.body.hematology,
        urine: req.body.urine,
        chemistry: req.body.chemistry,
        paristology: req.body.paristology,
        seriology: req.body.seriology,
      },
    });
    const resul = await paitient.save();
    res.send(resul);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/get-to-approval", async (req, res) => {
  const load = await ApprovalList.find();

  res.send(load);
});
////////////////////////////////////////////////////////////////////////////////////////////////
// for turn
app.post("/send-to-lab", async (req, res) => {
  const result = await ApprovalList.findByIdAndRemove(req.body.id);
  if (result == null) {
    return res.send("failed to send to approval");
  } else {
    const paitient = new TestWaiting({
      userId: result.userId,
      firstName: result.firstName,
      lastName: result.lastName,
      test: result.test,
    });
    const resul = await paitient.save();
    res.send(resul);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/test-waiting-paitients", async (req, res) => {
  const load = await TestWaiting.find();

  res.send(load);
});

////////////////////////////////////////////////////////////////////////////////////////////////
// for turn
app.post("/send-to-labresult", async (req, res) => {
  console.log(req.body.doctor);
  const result = await TestWaiting.findByIdAndRemove(req.body.id);

  if (result == null) {
    return res.send("failed to send to approval");
  } else {
    const paitient = new LabResult({
      userId: result.userId,
      firstName: result.firstName,
      lastName: result.lastName,
      test: {
        doctor: req.body.doctor,
        age: req.body.age,
        sex: req.body.sex,
        testDate: req.body.testDate,
        reportDate: req.body.reportDate,
        hematology: req.body.hematology,
        urine: req.body.urine,
        chemistry: req.body.chemistry,
        paristology: req.body.paristology,
        seriology: req.body.seriology,
      },
    });
    const ress = await paitient.save();
    res.send(ress);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/paitients-lab-result", async (req, res) => {
  const load = await LabResult.find();

  res.send(load);
});
////////////////////////////////////////////////////////////////////////////////////////////////
const calculateAge = (Dob) => {
  console.log("DoB:", Dob);
  var today = new Date();
  var birthday = new Date(Dob);
  var difs = today - birthday.getTime();
  var m = today.getMonth() - birthday.getMonth();
  var agediff = new Date(difs);
  var age = Math.abs(agediff.getUTCFullYear() - 1970);
  if (m < 0 || (m === 0 && today.getDate() - birthday.getDate())) {
    age--;
    m = today.getMonth();
  }
  console.log("year:", age, ":month:", m);
  return { year: age, month: m };
};
module.exports = app;
