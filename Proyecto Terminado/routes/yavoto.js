var express = require('express');
var router = express.Router();

/* GET home page. */
/*Pagina Principal*/
router.get('/', function(req, res, next) {
  res.render('yavoto', { title: 'Bienvenido a las Elecciones 2019' });
});

module.exports = router;