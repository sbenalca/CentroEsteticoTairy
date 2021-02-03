var mongoose = require('mongoose')

const PromocionesSchema = new mongoose.Schema(
    {
        _id:{
            type: String
        },
        costoRebaja: {
            type: Number
        },
        descripcion: {
            type: String
        },
        fechaFinaliza:{
            type: Date
        },
        servicios:{
            type: [String]
        },
        img:{
            type: String
        }
        
    }
);

module.exports = mongoose.model('promociones',PromocionesSchema,"promociones");