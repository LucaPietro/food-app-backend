const allRoutes = require('express').Router();
const establishment = require('./establishment');
const item = require('./item');
const segment = require('./segment');

allRoutes.use(establishment, item, segment);

module.exports = allRoutes;
