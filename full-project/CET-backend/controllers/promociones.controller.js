const Promocion = require("../collections/promociones.model");

exports.findAll = (req, res) => {
    
    Promocion.find({}, (err, docs) => {
        res.send(docs)
    })
};

exports.findOne = (req, res) => {
    
    Promocion.findOne({_id: req.query.promocion}, (err, docs) => {
        res.send(docs)
    })
};

exports.estadisticas = (req,res)=>{
    data = require("../resources/statsPromos.json")
    res.send(data)
};