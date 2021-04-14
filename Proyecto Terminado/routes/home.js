var express = require('express');
var router = express.Router();

/* GET home page. */
/*Pagina Principal*/
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Bienvenido a las Elecciones 2019' });
});

/* GET login */
router.get('/', function(req, res, next){
  res.render('home', {title: "Pagina principal"});
});


module.exports = router;
