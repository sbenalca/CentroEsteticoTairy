const db = require("../models");
const Persona = db.Persona;
const Usuario = db.Usuario;
const Empleado = db.Empleado;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Persona.findAll({})
    .then(data => {
      res.send(data);
    })
};

exports.findOne = (req, res) => {
    Persona.findAll({ where: { idpersona: req.query.id}})
    .then(data => {
      res.send(data);
    })
};

exports.findUsuario = (req, res) => {
    Usuario.findAll({  where: { idusuario: req.query.id}})
    .then(data => {
      Persona.findAll({where :{idpersona: data[0].idpersona}})
      .then(data => {
          res.send(data)
      })
    })
};

exports.findUsuarios = (req, res) => {
    Usuario.findAll({})
    .then(data => {
        res.send(data)
    })
};

exports.findEmpleado = (req, res) => {
    Empleado.findAll({  where: { cedula: req.query.id}})
    .then(data => {
        Persona.findAll({where :{idpersona: data[0].idpersona}})
        .then(data => {
            res.send(data)
        })
    })
};

exports.findEmpleados = (req, res) => {
    Empleado.findAll({})
    .then(data => {
        res.send(data)
    })
};

exports.createUser = (req, res)=> {
  
    

};