const nodemailer = require('nodemailer');

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
};

