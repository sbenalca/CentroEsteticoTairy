comentarios = require("../resources/comments.json");
tratamientos = require("../resources/tratamientos.json");
integrantes = require("../resources/integrantes.json");


exports.allComentarios = (req, res) =>{
    res.send(comentarios)
}

exports.allTratamientos = (req, res) =>{
    res.send(tratamientos)
}

exports.allIntegrantes = (req, res) =>{
    res.send(integrantes)
}