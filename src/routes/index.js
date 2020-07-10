const allRoutes = require("express").Router();
const establishment = require("./establishment");
const item = require("./item");
const segment = require("./segment");
const home = require("./home");

allRoutes.use(establishment, item, segment, home);

module.exports = allRoutes;
