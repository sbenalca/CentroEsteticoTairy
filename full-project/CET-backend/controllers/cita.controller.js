const db = require('../models/index.js');
const Persona = db.Persona;
const Cita = db.Cita;
const Usuario = db.Usuario;
var idper = 0;
exports.guardarCita = (req, res) => {
    /*  if (!req.body.nombre) {
         res.status(400).send({
             message: "Content can not be empty!"
         });
         return;
     } */
    var fecha1 = req.body.fechadia + " " + req.body.fechahora;
    // Create a Tutorial
    var selec = req.body.servicio;
    
    Persona.findAll({})
        .then(data => {
            idper = data.length + 3 + idper;
            const persona = {
                idpersona: idper,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                direccion: req.body.direccion,
                correo: req.body.correo,
                telefono: req.body.telefono,
            };
            
            Persona.create(persona)
                .then(data => {
                    const usuario = {
                        idpersona: idper
                    };
                    
                    Usuario.create(usuario)
                        .then(data => {
                            console.log(selec+"-----------");
                            Usuario.findAll({ where: { idpersona: idper } })
                                .then(data => {
                                    const cita = {
                                        idusuario: data[0]["idusuario"],
                                        fecha: fecha1,
                                        idservicio: selec
                                    }
                                    console.log(cita);
                                    Cita.create(cita)
                                    .then(data=>{  
                                        res.send(data);
                                    }) 
                                });
                        })
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the Tutorial."
                    });
                });
        })






    // Save Tutorial in the database

};

exports.findAllCita = (req,res) =>{
    Cita.findAll({})
    .then(data =>{
        res.send(data);
    });
};