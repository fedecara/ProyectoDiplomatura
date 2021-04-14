var mongoose = require('mongoose');

var SufragioSchema = new mongoose.Schema(
    {
    dni: {
        type: String,
        required: true,
        trim: true},
        
    idcandidato:{
        type: String,
        required: true,
        trim: true
    }
        
        
});

var sufragio= mongoose.model("Sufragio", SufragioSchema);
module.exports = sufragio;
