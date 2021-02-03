var express = require('express');
var router = express.Router();
const citaController = require('../controllers/cita.controller.js');


router.post('/generarCita',citaController.guardarCita);
router.get('/citasbuscar',citaController.findAllCita);
module.exports = router;