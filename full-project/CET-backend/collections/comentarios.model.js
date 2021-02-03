var mongoose = require('mongoose')

const ComentarioSchema = new mongoose.Schema(
    {
        id_comentario:{
            type: String
        },
        fecha: {
            type: String
        },
        mensaje: {
            type: String
        }
    }
);

const RegistroSchema = new mongoose.Schema(
    {
        _id:{
            type: String
        },
        id_usuario:{
            type: String
        },
        comentarios: {
            type: [ComentarioSchema]
        }
    }
);

module.exports = mongoose.model('comentarios',RegistroSchema,"comentarios"); 