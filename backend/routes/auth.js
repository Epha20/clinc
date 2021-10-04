const express = require("express");
const jwt = require("jsonwebtoken");
const checkdoctor = (req, res, next) => {
  const receivedToken = req.headers.token;
  const decodedToken = jwt.verify(
    receivedToken,
    process.env.JWT_SECRET,
    function (err, decode) {
      if (err) return res.status(401).send("access denaid");
      else {
        if (decode.role === "doctor") next();
        else {
          return res.status(401).send("you don't have doctor privileges");
        }
      }
    }
  );
};
const checklabe = (req, res, next) => {
  const receivedToken = req.headers.token;
  const decodedToken = jwt.verify(
    receivedToken,
    process.env.JWT_SECRET,
    function (err, decode) {
      if (err) return res.status(401).send("access denied");
      else {
        req.user = decode;
        if (decode.role === "labtechnician") next();
        else {
          return res.status(401).send("you are not authorized");
        }
      }
    }
  );
};
const receptionist = (req, res, next) => {
  const receivedToken = req.headers.token;
  const decodedToken = jwt.verify(
    receivedToken,
    process.env.JWT_SECRET,
    function (err, decode) {
      if (err) return res.status(401).send("access denaid");
      else {
        req.user = decode;
        if (decode.role === "receptionist") next();
        else {
          return res.status(401).send("you are not authorised");
        }
      }
    }
  );
};
module.exports = {
  doctor: checkdoctor,
  lab: checklabe,
  receptionist: receptionist,
};
