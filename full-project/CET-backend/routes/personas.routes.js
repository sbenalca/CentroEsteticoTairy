var express = require('express');
var router = express.Router();

const personaController = require("../controllers/personas.controller.js");

router.get('/', personaController.findAll);
// Create a new User
router.post("/", personaController.create);
router.get('/search', personaController.findOne);
router.get('/searchUsuario', personaController.findUsuario);
router.get('/usuarios', personaController.findUsuarios);
router.get('/searchEmpleado', personaController.findEmpleado);
router.get('/empleados', personaController.findEmpleados);

// Update a Tutorial with id
router.put("/", personaController.update);

// Delete a Tutorial with id
router.delete("/", personaController.delete);

// Delete all Tutorials
router.delete("/drop", personaController.deleteAll);

module.exports = router;