var mongoose = require('mongoose')

const PromocionesSchema = new mongoose.Schema(
    {
        id_promocion:{
            type: String
        },
        costoRebaja: {
            type: Number
        },
        descripcion: {
            type: String
        },
        fechaFializa:{
            type: Date
        }
        
    }
);

var Promociones = mongoose.model('promociones',PromocionesSchema); 
module.exports = {Promociones}