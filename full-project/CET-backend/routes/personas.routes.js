var express = require('express');
var router = express.Router();

const personaController = require("../controllers/personas.controller.js");

router.get('/', personaController.findAll);
router.get('/search', personaController.findOne);
router.get('/searchUsuario', personaController.findUsuario);
router.get('/searchEmpleado', personaController.findEmpleado);
router.get('/empleados', personaController.findEmpleados);

module.exports = router;