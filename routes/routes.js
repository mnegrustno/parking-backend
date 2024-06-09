const Router = require('express');

const router = new Router();

const parkingController = require('../controller/parking.controller');

router.post('/createplace', parkingController.createPlace);

module.exports = router;
