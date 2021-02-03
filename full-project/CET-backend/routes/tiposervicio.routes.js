var express = require('express');
var router = express.Router();

const tiposervicioController = require("../controllers/tiposervicios.controller.js");

router.get('/', tiposervicioController.findAll);
router.get('/search', tiposervicioController.findOne);

module.exports = router;