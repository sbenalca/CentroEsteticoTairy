var express = require('express');
var router = express.Router();
const citaController = require('../controllers/cita.controller.js');


router.post('/guardarCita', citaController.guardarCita);

module.exports = router;