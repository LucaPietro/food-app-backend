const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Establishment = require("../models/Establishment");
const Segment = require("../models/Segment");
const Item = require("../models/Item");

const connection = new Sequelize(dbConfig);

Establishment.init(connection);
Segment.init(connection);
Item.init(connection);

Establishment.associate(connection.models);
Segment.associate(connection.models);
Item.associate(connection.models);

module.exports = connection;
