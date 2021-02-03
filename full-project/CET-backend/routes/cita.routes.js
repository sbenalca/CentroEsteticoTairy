var express = require('express');
var router = express.Router();
const citaController = require('../controllers/cita.controller.js');


<<<<<<< HEAD
router.post('/generarCita',citaController.guardarCita);
router.get('/citasbuscar',citaController.findAllCita);
=======
router.get('/', citaController.findAll);
router.post('/guardarCita', citaController.guardarCita);
router.get('/estadisticas',citaController.estadisticas)

>>>>>>> 00be01c6446c471496856bc64150ff77deb0b8a4
module.exports = router;