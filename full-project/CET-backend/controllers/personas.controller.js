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

<<<<<<< HEAD
=======
exports.create = (req, res)=> {

    const personaNueva = {
        idpersona:24,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        direccion:req.body.direccion,
        correo:req.body.correo,
        telefono:req.body.telefono
    };
    Persona.create(personaNueva)
    .then(data =>{
        console.log(data.dataValues);
        usuarioNuevo={
          idusuario: 15,
          idpersona:data.dataValues.idpersona
        }
        Usuario.create(usuarioNuevo)
        .then(data =>{
            console.log("empleado: "+data.dataValues);
            empleadoNuevo={
                idempleado: 4,
                cedula:"0999999",
                idpersona:data.dataValues.idpersona,
                idarea:1
            }
            Empleado.create(empleadoNuevo)
            .then(data =>{
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the Empleado."
                });
            });
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Usuario."
            });
        });
    })
    
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Persona."
        });
    });

};

exports.update = (req, res) => {
  
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};
>>>>>>> 00be01c6446c471496856bc64150ff77deb0b8a4
