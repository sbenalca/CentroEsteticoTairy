const db = require("../models");
const Areas = db.Area;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Areas.findAll({})
    .then(data => {
      res.send(data);
    })
};

exports.findOne = (req, res) => {
    Areas.findAll({ where: { idarea: req.query.id}})
    .then(data => {
      res.send(data);
    })
};
