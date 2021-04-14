var mongoose = require('mongoose');



var VotanteSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        apellido: {
            type: String,
            required: true,
            trim: true
        },
        dni: {
            type: Number,
            unique:true,
            required: true,
            trim: true
        },

        genero:{
            type:String,
            required: true,
            trim: true
        }
    }
);



var votante = mongoose.model("Votante", VotanteSchema);
module.exports = votante;