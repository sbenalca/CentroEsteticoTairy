const db = require("../models");
const Tipo = db.TipoServicio;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Tipo.findAll({})
    .then(data => {
      res.send(data);
    })
};

exports.findOne = (req, res) => {
    Tipo.findAll({ where: { idtiposervicio: req.query.id}})
    .then(data => {
      res.send(data);
    })
};
