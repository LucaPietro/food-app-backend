const express = require('express');

const routerSession = express.Router();
const segmentController = require('../controllers/SegmentController');

routerSession.get('/segment', segmentController.index);
routerSession.post('/segment', segmentController.create);
routerSession.get('/segment/:id', segmentController.show);
routerSession.put('/segment/:id', segmentController.update);
routerSession.delete('/segment/:id', segmentController.delete);

module.exports = routerSession;
