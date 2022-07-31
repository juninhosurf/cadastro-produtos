var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!global.produtos) global.produtos = [];
  res.render('index', { title: 'Lista de produtos', produtos: global.produtos});
});

module.exports = router;
