var express = require('express');
const db = require('../models/index.js');
const Persona = db.Persona;
const Op = db.Sequelize.Op;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prueba backend CET' });
});

router.post('/pruebaBase', function(req,res,next){
    Persona.findAll({})
    .then(data=>{
      res.send(data);
    })
});

module.exports = router;
