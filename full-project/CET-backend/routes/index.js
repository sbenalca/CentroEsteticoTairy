var express = require('express');
var router = express.Router();

const clienteController = require("../controllers/cliente.controller.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prueba backend CET' });
});

router.get('/comentarios',clienteController.allComentarios);
router.get('/integrantes',clienteController.allIntegrantes);
router.get('/tratamientos',clienteController.allTratamientos);

module.exports = router;
