const winston = require("winston");

module.exports = function (err, req, res, next) {
  // winston.log("error", err.message);
  //or
  // winston.error(err.message); //storing just a message
  // winston.error(err.message, err); //storing with meta data
  winston.log({
    level: "error",
    message: err.message,
    stack: err.stack,
    metadata: err, // Put what you like as meta
  });
  // levels
  //error
  //warn
  //info
  // verbose
  //debug
  //silly
  console.log(err.message);
  res.status(500).send(err);
};
