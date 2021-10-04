import React from "react";

// import Treatment from "../components/treatment";
import PaitientHistory from "../components/paitientHistory";
import LabResult from "../components/labresult";
import TestForm from "../components/testForm";
import AddUser from "../components/addUser";
import EditProfile from "../components/editprofile";
import Prescription from "../components/prescription";
import Paitient from "../components/paitient";
import history from "../components/history";
import addPaitient from "../components/receptionist/addPaitient";
import searchpaitient from "../components/receptionist/searchpaitient";
import editpaitient from "../components/receptionist/editpaitient";
import paymentApproval from "../components/receptionist/paymentApproval";
import sendtodoctor from "../components/labTechnician/sendtodoctor";
import ShowListOfWaiting from "../components/labTechnician/showListofwaiting";
import receivedLabtestform from "../components/labTechnician/receivedLabtestform";
import ListofLabResult from "../components/listofLabResult";
const doctorRoute = [
  {
    path: "/paitient-history",
    page: PaitientHistory,
  },
  {
    label: "paitient",
    path: "/paitient",
    page: Paitient,
    action: "paitient",
  },
  {
    path: "/tesform",
    page: TestForm,
  },
  {
    label: "lab result",
    path: "/labresult",
    page: ListofLabResult,
    action: "labresult",
  },
  {
    path: "/detail-lab-result",
    page: LabResult,
  },
  {
    path: "/prescription",
    page: Prescription,
  },

  {
    label: "Add User",
    path: "/adduser",
    page: AddUser,
  },
  {
    label: "profile",
    path: "/profile",
    page: EditProfile,
  },
  {
    label: "history",
    path: "/history",
    page: history,
    
  },
];
const receptionistRoute = [
  {
    label: "Add paitient",
    path: "/addpaitient",
    page: addPaitient,
  },
  {
    label: "search paitient",
    path: "/searchpaitient",
    page: searchpaitient,
  },
  {
    label: "Edit paitient",
    path: "/editpaitient",
    page: editpaitient,
  },
  {
    label: "approval",
    path: "/approval",
    page: paymentApproval,
    action: "approval",
  },
  { label: "profile", path: "/profile", page: EditProfile },
];
const labtechnicianRoute = [
  {
    path: "/sendlabresult",
    page: sendtodoctor,
  },
  {
    label: "Receive",
    path: "/listofwaiting-users",
    page: ShowListOfWaiting,
    action: "waiting",
  },
  {
    path: "/receivetestform",
    page: receivedLabtestform,
  },
  { label: "profile", path: "/profile", page: EditProfile },
];
export { doctorRoute, receptionistRoute, labtechnicianRoute };
