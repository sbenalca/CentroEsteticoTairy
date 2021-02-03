const nodemailer = require('nodemailer');
const db = require("../models");
const Persona = db.Persona;
const Usuario = db.Usuario;
const Comentario = require("../collections/comentarios.model");

exports.send = (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cet.eabmodel@gmail.com',
      pass: 'eabmodel'
    }
  });
  
  var mailOptions = {
    from: 'cet.eabmodel@gmail.com',
    to: 'cet.eabmodel@gmail.com',
    subject: 'Comentario nuevo en pagina web.',
    text: 'Nuevo comentario.\nNombre del usuario: '+req.body.nombre+'\nFecha de nacimiento: '+req.body.fecha+'\nCiudad: '+req.body.ciudad+'\nCorreo electronico: '+req.body.correo+'\nMensaje: '+req.body.mensaje
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    }else{
      console.log("Correo enviado con exito!")
    }
  });

  const perNaN = {
    idpersona:'17',
    nombre:req.body.nombre,
    apellido:" ",
    direccion:req.body.ciudad,
    correo:req.body.correo,
    telefono:" "
  };
  Persona.create(perNaN)
  .then(data =>{
    usuNaN={
      idusuario: 6,
      idpersona:data.idpersona
    }
    Usuario.create(usuNaN)
    .then(data =>{
      Comentario.create({
        _id: "70",
        id_usuario:data.dataValues.idusuario,
        comentarios:[{
          id_comentario: "6019a4e58919b6d512tg1a57",
          fecha: req.body.fecha,
          mensaje: req.body.mensaje
        }]
      }, function (err, small) {
      });
    })
  })

  
  
};

