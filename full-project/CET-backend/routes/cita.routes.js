var express = require('express');
var router = express.Router();
const citaController = require('../controllers/cita.controller.js');


router.get('/', citaController.findAll);
router.post('/guardarCita', citaController.guardarCita);
router.get('/estadisticas',citaController.estadisticas)

module.exports = router;