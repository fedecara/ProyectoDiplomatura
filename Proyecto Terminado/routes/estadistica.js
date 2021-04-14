var candidato=require('../Models/candidato');
var sufragio=require('../Models/sufragio');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    candidato.find(function(err,listcandidato){
    if (listcandidato.length>0){

        var votos = new Array();
        var total = 0;
        for(i=0; i < listcandidato.length; i++){
                votos.push({partido: listcandidato[i].Partidopolitico,nombre:listcandidato[i].Precidentenombre,imagen:listcandidato[i].Imagen, cant: listcandidato[i].cantvotos});
        total+=listcandidato[i].cantvotos;
              }
        res.render('estadisticatorta',{title: "estadistica",cantidadvotos: votos,listcandidato:listcandidato,total: total});
      
    
   
  }
    else {
      console.log("Ok")
  
    }});
   });
   
   

module.exports = router;
