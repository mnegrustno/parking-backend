const Router = require('express');

const router = new Router();

const parkingController = require('../controller/parking.controller');

router.post('/form', parkingController.createPlace);

module.exports = router;