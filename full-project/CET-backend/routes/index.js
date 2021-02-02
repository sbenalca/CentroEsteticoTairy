var express = require('express');
const db = require('../models/model.js');
const TPersona = db.persona;
const Op = db.Sequelize.Op;
var router = express.Router();

const clienteController = require("../controllers/cliente.controller.js");
const { persona } = require('../models/model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prueba backend CET' });
});

router.get('/comentarios',clienteController.allComentarios);
router.get('/integrantes',clienteController.allIntegrantes);
router.get('/tratamientos',clienteController.allTratamientos);
router.get('/pruebaBase', function(req,res,next){
    persona.fillAll({})
    .then(data=>{
      res.send(data);
    })
});

module.exports = router;
