const express = require("express");

const app = express();

// const Joi = require('joi');

const mongoose = require("mongoose");

app.use(express.json());

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const BirukMediumClinicUsers = new mongoose.model(
  "BirukMediumClinicUsers",
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    address: {
      type: String,
    },
    sex: {
      type: String,
    },
    email: {
      type: String,
    },
    role: { type: String, default: "doctor" },
  })
);
app.use(express.json());
app.post("/sign-up", async (req, res) => {
  const salt = await bcrypt.genSalt(5);
  let password = req.body.password;
  console.log("password:" + password);
  if (password) {
    password = await bcrypt.hash(password, salt);

    const user = new BirukMediumClinicUsers({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: password,
      phone: req.body.phone,
      address: req.body.address,
      sex: req.body.sex,
      role: req.body.role,
    });

    const result = await user.save();
    console.log(result);

    res.send({ register: true });
  } else res.send("password is required");
});

app.post("/get-users", async (req, res) => {
  const users = await BirukMediumClinicUsers.find();
  if (!users) return res.status(500).send("there are no available users");

  res.send(users);
});

app.post("/sign-in", async (req, res) => {
  console.log(req.body.phone);
  const users = await BirukMediumClinicUsers.findOne({
    phone: req.body.phone,
  });
  // console.log(users);
  if (users == null) {
    return res.status(400).send({
      msg: "user name or password not correct ",
      signed: false,
    });
  }

  const validPassword = await bcrypt.compare(req.body.password, users.password);
  // console.log("dbPass:" + users[0], "req:" + req.body.password);
  if (validPassword) {
    const token = jwt.sign(
      { id: users._id, role: users.role, phone: users.phone },
      process.env.clkey
    );
    res.status(200).send({
      msg: "successful",
      signed: true,
      token: token,
      role: users.role,
    });
  } else {
    res.status(500).send({
      msg: "user name or password not correct",
      signed: false,
    });
  }
});

module.exports = app;
