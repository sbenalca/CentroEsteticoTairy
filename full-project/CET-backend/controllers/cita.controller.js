const db = require('../models/index.js');
const Persona = db.Cita;

exports.guardarCita = (req,res) =>{

}


exports.findAll = (req, res) => {
    Persona.findAll({})
    .then(data => {
      res.send(data);
    })
};

exports.estadisticas = (req,res)=>{
  data = require("../resources/statsCitas.json")
  res.send(data)
};
