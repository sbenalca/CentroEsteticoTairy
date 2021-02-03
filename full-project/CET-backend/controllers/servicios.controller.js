const db = require("../models");
const Servicios = db.Servicio;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Servicios.findAll({})
    .then(data => {
      res.send(data);
    })
};

exports.findOne = (req, res) => {
    Servicios.findAll({ where: { idservicio: req.query.id}})
    .then(data => {
      res.send(data);
    })
};
