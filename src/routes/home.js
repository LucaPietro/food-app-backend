const express = require("express");

const routerSession = express.Router();

routerSession.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = routerSession;
