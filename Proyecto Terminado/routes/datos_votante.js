var express = require('express');
var router = express.Router();
var votante=require('../Models/votante')

/*GET users listing.*/


router.get('/',function(req,res,next)
  {res.render('votante',{title:"Datos Votante"})})

/*Post datos del votante*/
router.post('/', function(req, res, next){
  //Confirmar los datos del votante...
  if (req.body.nombre && req.body.dni && req.body.apellido && req.body.genero) {
    var votanteData = new votante ({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
      genero: req.body.genero
    });
    
    //votanteData.save();
    
    votante.find({dni : req.body.dni},function(err,consultavotante){
      console.log(consultavotante.length)
      if (consultavotante.length==0){
        votanteData.save();
        req.session.dni = req.body.dni;
        console.log(req.session)
        res.redirect('/candidato')
      }
      else {
        res.redirect('/yavoto');


      }
    
    });
  }
})
module.exports = router;