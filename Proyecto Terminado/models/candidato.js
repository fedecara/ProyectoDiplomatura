var mongoose = require('mongoose');

var CandidatoSchema = new mongoose.Schema(
    {  identificador: {
        type: String,
        required: true,
        trim: true
        },
       Imagen: {
        type: String,
        required: true,
        trim: true
        },
     
        Precidentenombre: {
            type: String,
            required: true,
            trim: true
        },
        
        Partidopolitico:{
            type: String,
            required:true,
            trim:true
        },
        cantvotos: {
            type: Number,
            required:true,
            trim:true
        }
    }
);

var candidato = mongoose.model("Candidato", CandidatoSchema);
module.exports = candidato;
