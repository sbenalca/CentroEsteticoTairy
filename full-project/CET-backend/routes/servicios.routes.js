var express = require('express');
var router = express.Router();

const servicioController = require("../controllers/servicios.controller.js");

router.get('/', servicioController.findAll);
router.get('/search', servicioController.findOne);

module.exports = router;