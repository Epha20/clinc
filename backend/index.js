const express = require("express");
require("dotenv").config();
const cors = require("cors");
const con = require("./startingfolder/notification/notification");
// const socket = require("socket.io");
if (!process.env.clkey) {
  console.log("security key is not setted");
}
const app = express();
////////////////////////////////////////////////////////////////
// --user-data-dir="C:/Chrome dev session" --disable-web-securit
app.use(express());

require("./startingfolder/logging")();
require("./startingfolder/db")();
require("./startingfolder/routes")(app);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const server = app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`app is listening on ${process.env.HOST}:${process.env.PORT}`);
});
con.connect(server);
// const io = socket(server);
// io.on("connection", (socket) => {
//   // console.log(socket);
//   socket.on("message", (msg) => {
//     console.log("message:", msg);
//     socket.emit("message", "your message received");
//   });
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });
