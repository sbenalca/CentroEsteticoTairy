const express = require('express');
const db = require('../models/index.js');
const Persona = db.Persona;
const Op = db.Sequelize.Op;
const emailController = require("../controllers/email.controller.js");
const loginController = require("../controllers/login.controller.js");

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Backend CET' });
});

router.post("/contactanos/email", emailController.send);

router.post("/login",loginController.login);

router.get("/estadisticas",function(req,res,next){
  data=require("../resources/stats.json")
  res.send(data)
});

router.post('/pruebaBase', function(req,res,next){
    Persona.findAll({})
    .then(data=>{
      res.send(data);
    })
});



module.exports = router;
