const Comentario = require("../collections/comentarios.model");

exports.findAll = (req, res) => {
    
    Comentario.find({}, (err, docs) => {
        res.send(docs)
    })
};

exports.findOne = (req, res) => {
    
    Comentario.find({id_usuario: req.query.usuario}, (err, docs) => {
        res.send(docs)
    })
};