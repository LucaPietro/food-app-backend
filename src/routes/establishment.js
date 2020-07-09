const express = require('express');

const routerSession = express.Router();
const establishmentController = require('../controllers/EstablishmentController');

routerSession.get('/establishment', establishmentController.index);
routerSession.post('/establishment', establishmentController.create);
routerSession.get('/establishment/:id', establishmentController.show);
routerSession.put('/establishment/:id', establishmentController.update);
routerSession.delete('/establishment/:id', establishmentController.delete);

module.exports = routerSession;
