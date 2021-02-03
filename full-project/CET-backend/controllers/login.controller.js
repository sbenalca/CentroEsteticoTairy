const db = require("../models");
const Admin = db.Administrador;
const auth = require('../middleware/auth');
const Op = db.Sequelize.Op;

exports.login = (req, res) => {
  let user;
  Admin.findOne({ where: { usuario: req.body.user, contrasena: req.body.contrasena}})
  .then(data => {
    user=data;
  })
  .then(data =>{
    if (user) {
      let token = auth.sign(req.body.user, req.body.contrasena);
      res.json({
        token
    });
    }else{
      res.send('Username or password incorrect');
    }
  })
};
