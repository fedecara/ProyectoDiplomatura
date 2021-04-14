var express = require('express');
var router = express.Router();
var candidato=require('../Models/candidato')
var sufragio=require('../Models/sufragio')


router.get('/',function(req,res,next){
  candidato.find(function(err,listcandidato){
    console.log(req.params.dni)
  if (listcandidato.length>0){
    
    res.render('voto',{title:"Candidatos a Precidencia",listcandidato: Array.from(listcandidato)});
  }
  else {
    console.log("Ok")

  }
  });
});

router.post('/', function(req, res, next){
 candidato.find({identificador: req.body.Candidatos}, function(err,listcandidato){
  if (listcandidato.length>0){
            var sufragiodata=new sufragio({dni: req.session.dni, idcandidato: listcandidato[0].identificador});
            sufragiodata.save();
          candidato.updateOne( {identificador: req.body.Candidatos}, 
                               {$inc: { cantvotos: 1 }}, 
                               function(err, res) {
                                if(err) throw err;
                                console.log("actualizado")
                             });
            };
    
  res.redirect('/estadistica')
        });
 }); 
  

module.exports = router;
