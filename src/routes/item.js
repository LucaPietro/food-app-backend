const express = require('express');

const routerSession = express.Router();
const itemController = require('../controllers/ItemController');

routerSession.get('/item', itemController.index);
routerSession.post('/item', itemController.create);
routerSession.get('/item/:id', itemController.show);
routerSession.put('/item/:id', itemController.update);
routerSession.delete('/item/:id', itemController.delete);

module.exports = routerSession;
